package com.anonymizer.integration;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.Value;

@Data
public class AnonymizeObject {
  String entity;
  String anonymization;
  @JsonProperty("anon_type")
  String anonType;
}