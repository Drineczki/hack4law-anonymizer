package com.drineczki.demo.testroute;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@Validated
@CrossOrigin("*")
@RestController
@RequestMapping("/test-java-route")
public class TestRouteAPI {

    @GetMapping()
    public String test() {
        return "Java API is working!";
    }

}
