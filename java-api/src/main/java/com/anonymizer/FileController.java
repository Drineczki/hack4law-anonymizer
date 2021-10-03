package com.anonymizer;

import java.util.List;

import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.anonymizer.integration.AnonymizeObject;
import com.anonymizer.model.FileProcessingResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/files")
@CrossOrigin("*")
@RequiredArgsConstructor
public class FileController {

  private final FileService fileService;

  @PostMapping("/process")
  public FileProcessingResponse process(@RequestParam("file") MultipartFile file) {
    return fileService.processFile(file);
  }

  @GetMapping("/{fileName}")
  public ResponseEntity<Resource> downloadFile(@PathVariable String fileName) {
    Resource resource = fileService.loadFileAsResource(fileName);
    return ResponseEntity.ok()
        .body(resource);
  }

  @PutMapping("/{fileName}")
  public FileProcessingResponse changeReplacements(
      @PathVariable String fileName,
      @RequestBody List<AnonymizeObject> replacementList,
      @RequestParam Boolean accept) {
    return fileService.changeReplacements(fileName, replacementList, accept);
  }
}
