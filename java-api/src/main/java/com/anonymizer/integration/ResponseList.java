package com.anonymizer.integration;

import java.util.List;

import lombok.Value;

@Value
public class ResponseList {
  List<ResponseObject> values;
}
