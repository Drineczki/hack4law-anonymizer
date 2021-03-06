package com.anonymizer.config;

import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;

@Configuration
public class RestTemplateConfig {
  @Bean
  public RestTemplate restTemplate(RestTemplateBuilder builder) {
    RequestConfig requestConfig = RequestConfig
        .custom()
        .setConnectionRequestTimeout(20000)
        .setSocketTimeout(20000)
        .setConnectTimeout(20000)
        .build();

    HttpClient httpClient = HttpClientBuilder.create()
        .setDefaultRequestConfig(requestConfig).build();

    ClientHttpRequestFactory requestFactory = new HttpComponentsClientHttpRequestFactory(httpClient);

    var restTemplate = new RestTemplate(requestFactory);
    restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(StandardCharsets.UTF_8));
    return restTemplate;
  }
}
