package com.anonymizer.integration;

import java.util.List;

import lombok.Data;
import lombok.Value;

@Data
public class AnonymizeList {
  List<AnonymizeObject> values;
}
