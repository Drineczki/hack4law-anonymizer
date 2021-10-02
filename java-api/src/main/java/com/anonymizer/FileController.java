package com.anonymizer;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/files")
@RequiredArgsConstructor
public class FileController {

  private final FileService fileService;

  @PostMapping("/process")
  public FileProcessingResponse process(@RequestParam("file") MultipartFile file) {
    return fileService.processFile(file);
  }

//  @PostMapping("/to-text")
//  public String uploadFile(@RequestParam("file") MultipartFile file) {
////    var fileName = fileService.storeFile(file);
////
////    var fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
////        .path("/downloadFile/")
////        .path(fileName)
////        .toUriString();
//
//    return fileService.getAsText(file);
//  }

//  @PostMapping("/uploadMultipleFiles")
//  public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
//    return Arrays.stream(files)
//        .map(this::uploadFile)
//        .collect(Collectors.toList());
//  }

  @GetMapping("/downloadFile/{fileName:.+}")
  public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
    // Load file as Resource
    Resource resource = fileService.loadFileAsResource(fileName);

    // Try to determine file's content type
    String contentType = null;
    try {
      contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
    } catch (IOException ex) {
      log.info("Could not determine file type.");
    }

    // Fallback to the default content type if type could not be determined
    if (contentType == null) {
      contentType = "application/octet-stream";
    }

    return ResponseEntity.ok()
        .contentType(MediaType.parseMediaType(contentType))
        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
        .body(resource);
  }

  @RequestMapping(method = {RequestMethod.GET}, value = "/getFile/{fileName}", produces =
      MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<MultiValueMap<String, Object>> getData(@PathVariable("fileName") String fileName) {
    Resource resource = fileService.loadFileAsResource(fileName);

    MultiValueMap<String, Object> mpr = new LinkedMultiValueMap<>();
    Map<String, String> map = new HashMap<>();
    map.put("janek", "sebek");
    map.put("kuba", "gej");

    mpr.add("map", map);
    mpr.add("file", resource);

    return new ResponseEntity<>(mpr, HttpStatus.OK);
  }
}
