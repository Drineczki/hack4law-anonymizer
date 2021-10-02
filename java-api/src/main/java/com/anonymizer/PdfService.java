package com.anonymizer;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.anonymizer.integration.ResponseObject;
import com.spire.pdf.PdfDocument;
import com.spire.pdf.PdfPageBase;
import com.spire.pdf.exporting.text.SimpleTextExtractionStrategy;
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

  public void replaceInOriginalFile(String inputFileUri, String outputFileUri, List<ResponseObject> replacementList) {
    var replacementMap = replacementList.stream().collect(Collectors.toMap(
        ResponseObject::getOriginalValue, ResponseObject::getAnonymizedValue
    ));

    var pdfDocument = new PdfDocument();
    pdfDocument.loadFromFile(inputFileUri);

    PdfTextFind[] results;

    StreamSupport.stream(pdfDocument.getPages().spliterator(), false)
            .forEach(page -> findAndReplace(page, replacementList));

//    for (Object page : pdfDocument.getPages()) {
//
//      PdfPageBase pageBase = (PdfPageBase) page;
//      String pattern = "Komornik";
//      results = pageBase.findText(pattern).getFinds();
//      for (PdfTextFind find : results) {
//        var text = "K";
//        find.applyRecoverString(text);
//      }
//    }
    pdfDocument.saveToFile(outputFileUri);
  }

  private void findAndReplace(Object page, List<ResponseObject> replacementList) {
    var pageBase = (PdfPageBase) page;
    replacementList.forEach(replacement -> {
      find(replacement, pageBase)
          .forEach(find -> replace(find, replacement.getAnonymizedValue()));
    });
  }

  private List<PdfTextFind> find(ResponseObject replacement, PdfPageBase pageBase) {
    return List.of(pageBase.findText(replacement.getOriginalValue()).getFinds());
  }

  private void replace(PdfTextFind find, String newValue) {
    try {
      find.applyRecoverString(newValue);
    } catch (Exception e) {
      throw new FileStorageException("Could not replace value in PDF.");
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

  public String getAsText(String pdfFile) {
    var pdfDocument = new PdfDocument();
    var simpleTextExtractionStrategy = new SimpleTextExtractionStrategy();
    pdfDocument.loadFromFile(pdfFile);

    var pages = pdfDocument.getPages().getCount();
    var sb = new StringBuilder();

    for (int i = 0; i < pages; i++) {
      sb.append(pdfDocument.getPages().get(i).extractText(simpleTextExtractionStrategy));
    }

    return sb.toString();
  }

}
