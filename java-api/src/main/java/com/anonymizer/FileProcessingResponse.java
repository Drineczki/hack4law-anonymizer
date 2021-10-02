package com.anonymizer;

import java.util.List;
import java.util.Map;

import com.anonymizer.integration.ResponseObject;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FileProcessingResponse {
    private String fileName;
    private String fileDownloadUri;
    private long size;
    private List<ResponseObject> replacements;
}
