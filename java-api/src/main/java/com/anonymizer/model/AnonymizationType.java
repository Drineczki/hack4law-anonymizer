package com.anonymizer.model;

import java.util.Arrays;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AnonymizationType {
  INTERNET("internet", 0x777DF2),
  NUMERICAL("numerical", 0xF2B366),
  PLACE("place", 0xF22786),
  GEOLOC("geoloc", 0xF22786),
  PERSONAL("pers", 0x777DF2);

  private String value;
  private int color;

  public static AnonymizationType of(String value) {
    return Arrays.stream(values())
        .filter(type -> type.value.equals(value))
        .findAny()
        .orElseThrow(() -> new UnsupportedOperationException("Anonimization type " + value + " not supported."));
  }
}
