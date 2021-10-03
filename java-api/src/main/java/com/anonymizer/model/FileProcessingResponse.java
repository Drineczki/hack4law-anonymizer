package com.anonymizer.model;

import com.anonymizer.integration.AnonymizeObject;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FileProcessingResponse {
  private String fileName;
  private String fileDownloadUri;
  private List<AnonymizeObject> replacements;
}
