package com.anonymizer.integration;

import com.anonymizer.exception.FileProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Component
@RequiredArgsConstructor
public class PythonApiConnector {

  private final RestTemplate restTemplate;
  private final ObjectMapper objectMapper;

  @Value("${python.api.base.url}")
  private String basePath;

  @Value("${python.api.endpoint.url}")
  private String endpointPath;

  public List<AnonymizeObject> processFile(String fileAsText) {
    var requestUrl = basePath + endpointPath;
    var textRequest = new TextRequest(fileAsText);
    var request = new HttpEntity<>(textRequest, new HttpHeaders());

    String personResultAsJsonStr =
        restTemplate.postForObject(requestUrl, request, String.class);
    try {
      var list = Arrays.stream(objectMapper.readValue(personResultAsJsonStr, AnonymizeObject[].class))
          .collect(Collectors.toList());
      log.info("Python response:");
      list.forEach(elem -> log.info(elem.toString()));
      return list;
    } catch (IOException ex) {
      throw new FileProcessingException("Could not parse response from Python API.");
    }
  }
}
