package com.secondlife.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class TestRouteAPI {

    private final PdfService pdfService;

    @GetMapping("/test")
    public String test() {
        pdfService.test();
        return "Java API is working!";
    }

}
