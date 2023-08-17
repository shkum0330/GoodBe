package com.goodbe.business.web.service;

import com.goodbe.business.web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final MemberRepository memberRepository;

    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8089/auth") // 요청을 인증 서버로 보냄
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();

    private Boolean authorization(HttpServletRequest request){
        String token=request.getHeader("Authorization");
        String email=client.get().uri("/jwt/decoding")
                .header("Authorization",token)
                .retrieve()
                .bodyToMono(String.class).block();

        return memberRepository.findByEmail(email) != null;
    }

}
