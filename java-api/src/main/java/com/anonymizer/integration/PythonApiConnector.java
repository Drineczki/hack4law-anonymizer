package com.anonymizer.integration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import com.anonymizer.FileProcessingResponse;
import com.fasterxml.jackson.core.ObjectCodec;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PythonApiConnector {

  private final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  @Value("${python.api.base.url}")
  private String basePath;

  @Value("${python.api.endpoint.url}")
  private String endpointPath;

  public ResponseList processFile(String fileAsText) {
    var requestUrl = basePath + endpointPath;
    HttpEntity<String> request = new HttpEntity<String>(fileAsText, new HttpHeaders());

    ResponseEntity<ResponseList> responseEntityStr = restTemplate.postForEntity(requestUrl, request, ResponseList.class);

    return responseEntityStr.getBody();
  }
}
