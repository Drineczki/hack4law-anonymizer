package com.anonymizer;

import com.anonymizer.integration.AnonymizeObject;
import com.anonymizer.model.FileProcessingResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/files")
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
    return ResponseEntity.ok().body(resource);
  }

  @PutMapping("/{fileName}")
  public FileProcessingResponse changeReplacements(@PathVariable String fileName,
      @RequestBody List<AnonymizeObject> replacementList, @RequestParam Boolean accept) {
    return fileService.changeReplacements(fileName, replacementList, accept);
  }
}
