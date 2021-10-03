package com.anonymizer;

import java.awt.*;
import java.io.File;
import java.util.List;
import java.util.stream.StreamSupport;

import org.springframework.stereotype.Service;

import com.anonymizer.exception.FileProcessingException;
import com.anonymizer.integration.AnonymizeObject;
import com.anonymizer.model.AnonymizationType;
import com.spire.pdf.PdfDocument;
import com.spire.pdf.PdfPageBase;
import com.spire.pdf.exporting.text.SimpleTextExtractionStrategy;
import com.spire.pdf.general.find.PdfTextFind;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PdfService {

  public void replaceInOriginalFile(String inputFileUri, String outputFileUri, List<AnonymizeObject> replacementList, Boolean accept) {
    var pdfDocument = new PdfDocument();
    pdfDocument.loadFromFile(inputFileUri);

    StreamSupport.stream(pdfDocument.getPages().spliterator(), false)
            .forEach(page -> findAndReplace(page, replacementList, accept));
    deleteFile(outputFileUri);
    pdfDocument.saveToFile(outputFileUri);
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

  private void findAndReplace(Object page, List<AnonymizeObject> replacementList, final Boolean accept) {
    var pageBase = (PdfPageBase) page;
    replacementList.forEach(replacement -> {
      findForPage(replacement, pageBase)
          .forEach(find -> replace(find, replacement.getAnonymization(), accept, replacement.getAnonType()));
    });
  }

  private List<PdfTextFind> findForPage(AnonymizeObject replacement, PdfPageBase pageBase) {
    return List.of(pageBase.findText(replacement.getEntity()).getFinds());
  }

  private void replace(PdfTextFind find, String newValue, Boolean accept, String anonymizationType) {
    try {
      var color = new Color(AnonymizationType.of(anonymizationType).getColor());
      if (accept) {
        find.applyRecoverString(newValue, new Color(0xfcfcfc), true);
      } else {
        find.applyRecoverString(newValue, color, true);
      }
    } catch (Exception e) {
      throw new FileProcessingException("Could not replace value in PDF.");
    }
  }

  private void deleteFile(String fileUri) {
    var file = new File(fileUri);
    if (file.delete()) {
     log.info("Deleted the file: " + fileUri);
    } else {
      log.error("Failed to delete file " + fileUri);
    }
  }
}
