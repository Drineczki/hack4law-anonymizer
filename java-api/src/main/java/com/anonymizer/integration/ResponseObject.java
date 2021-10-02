package com.anonymizer.integration;

import lombok.Value;

@Value
public class ResponseObject {
  String originalValue;
  String anonymizedValue;
  String anonymizedType;
}
