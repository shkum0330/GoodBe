package com.goodbe.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("*"); // 허용할 출처 설정, *는 모든 출처를 허용
        configuration.addAllowedMethod("*"); // 허용할 HTTP 메서드 설정, *는 모든 메서드를 허용
        configuration.addAllowedHeader("*"); // 허용할 헤더 설정, *는 모든 헤더를 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // 모든 경로에 대해 CORS 설정 적용

        return source;
    }
}









