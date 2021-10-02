package com.secondlife.demo;

import java.io.File;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.spire.pdf.PdfDocument;
import com.spire.pdf.PdfPageBase;
import com.spire.pdf.general.find.PdfTextFind;

import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PdfService {

  public void test() {
    var classLoader = this.getClass().getClassLoader();
    try {
      var fileName = classLoader.getResource("pdf/test.PDF").getFile();
      var outputFile =  "src/test/resources/out.PDF";
      var out = new File(classLoader.getResource(".").getFile() + "/out.PDF");
      if (out.createNewFile()) {
        System.out.println("File is created!");
      } else {
        System.out.println("File already exists.");
      }
      convert(fileName, out.getPath());
    } catch (IOException e) {
      log.error("Witam żegnam");
    }

  }

  @SneakyThrows
  public void convert(String input, String output) {
    PdfDocument pdf = new PdfDocument();

    pdf.loadFromFile(input);

    PdfTextFind[] results;

    for (Object page : (Iterable) pdf.getPages()) {

      PdfPageBase pageBase = (PdfPageBase) page;
      String pattern = "Komornik";
      results = pageBase.findText(pattern).getFinds();
      for (PdfTextFind find : results) {
        var text = "K";
        find.applyRecoverString(text);
      }
    }
    pdf.saveToFile(output);
  }

}
