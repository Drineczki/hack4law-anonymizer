package com.anonymizer;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.anonymizer.config.FileStorageProperties;
import com.anonymizer.exception.FileProcessingException;
import com.anonymizer.exception.MyFileNotFoundException;
import com.anonymizer.integration.AnonymizeObject;
import com.anonymizer.integration.PythonApiConnector;
import com.anonymizer.model.FileProcessingResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class FileService {

  private final Path fileStorageLocation;
  private final PdfService pdfService;
  private final PythonApiConnector pythonApiConnector;

  @Autowired
  public FileService(FileStorageProperties fileStorageProperties, @Autowired PdfService pdfService, @Autowired PythonApiConnector pythonApiConnector) {
    this.pdfService = pdfService;
    this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
        .toAbsolutePath().normalize();
    this.pythonApiConnector = pythonApiConnector;
    try {
      Files.createDirectories(this.fileStorageLocation);
    } catch (Exception ex) {
      throw new FileProcessingException("Could not create the directory where the uploaded files will be stored.", ex);
    }
  }

  public String storeFile(MultipartFile file) {
    validateFile(file);
    // Normalize file name
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    try {
      // Copy file to the target location (Replacing existing file with the same name)
      Path targetLocation = this.fileStorageLocation.resolve(fileName);
      Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
      return targetLocation.toString();
    } catch (IOException ex) {
      throw new FileProcessingException("Could not store file " + fileName + ". Please try again!", ex);
    }
  }

  public Resource loadFileAsResource(String fileName) {
    try {
      Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
      Resource resource = new UrlResource(filePath.toUri());
      if (resource.exists()) {
        return resource;
      } else {
        throw new MyFileNotFoundException("File not found " + fileName);
      }
    } catch (MalformedURLException ex) {
      throw new MyFileNotFoundException("File not found " + fileName, ex);
    }
  }

  public FileProcessingResponse processFile(MultipartFile file) {
    validateFile(file);
    var originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
    var storedFilePath = storeFile(file);
    var fileAsText = pdfService.getAsText(storedFilePath);
    var outputFileName = "processed-" + originalFileName;

    var responseList = pythonApiConnector.processFile(fileAsText);

    pdfService.replaceInOriginalFile(storedFilePath, resolveFileNameInStorage(outputFileName), responseList, false);

    var fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path("/files/")
        .path(outputFileName)
        .toUriString();


    return new FileProcessingResponse(outputFileName, fileDownloadUri, responseList);
  }

  public String resolveFileNameInStorage(String fileName) {
    return this.fileStorageLocation.resolve(fileName).toString();
  }

  public FileProcessingResponse changeReplacements(String fileName, List<AnonymizeObject> replacementList, Boolean accept) {
    var storedFilePath = resolveFileNameInStorage(fileName);

    pdfService.replaceInOriginalFile(storedFilePath, resolveFileNameInStorage(fileName), replacementList, accept);

    var fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
        .path("/files/")
        .path(fileName)
        .toUriString();

    return new FileProcessingResponse(fileName, fileDownloadUri, replacementList);
  }

  private void validateFile(MultipartFile file) {
    var originalFilename = file.getOriginalFilename();
    if (originalFilename == null) {
      throw new FileProcessingException("Wrong file name.");
    }

    var extension = FilenameUtils.getExtension(originalFilename);
    if (!extension.equalsIgnoreCase("pdf")) {
      throw new FileProcessingException("Wrong file format. Only PDF files are supported.");
    }
  }
}
