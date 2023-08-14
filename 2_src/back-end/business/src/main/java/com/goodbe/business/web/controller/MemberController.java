package com.goodbe.business.web.controller;

import com.goodbe.business.web.dto.member.MemberLoginRequest;
import com.goodbe.business.web.dto.member.MemberRegisterRequest;
import com.goodbe.business.web.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8089") // 요청을 인증 서버로 보냄
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();
    @GetMapping("/test")
    public String test(){
        return client.get().uri("/login/google").retrieve().bodyToMono(String.class).block();
    }
    @PostMapping("/register")
    public ResponseEntity<MemberRegisterRequest> register(@RequestBody MemberRegisterRequest memberRegisterRequest){
        log.info("business memberdto={}",memberRegisterRequest);
        return client.post().uri(uriBuilder -> uriBuilder.path("/register").build())
                .bodyValue(memberRegisterRequest)
                .retrieve()
                .toEntity(MemberRegisterRequest.class)
                .block();
    }
    @GetMapping ("/login/google")
    public void login(HttpServletResponse response){
        // todo: 자체 로그인 구현..?
//        return client.post().uri(uriBuilder -> uriBuilder.path("/member/login").build())
//                .bodyValue(memberLoginRequest)
//                .retrieve()
//                .toEntity(String.class)
//                .block();
//        Mono<String> result=client.post().uri("/oauth2/authorization/google")
//                .retrieve().bodyToMono(String.class); // JWT를 반환한다.
//        String token=result.block();
//        return token;
        client.get().uri("/oauth2/authorization/google").retrieve().bodyToMono(String.class).block();
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request){
//        String encryptedRefreshToken = jwtTokenProvider.resolveRefreshToken(request);
//        String accessToken = jwtTokenProvider.resolveAccessToken(request);


    }
    @PostMapping("/update")
    public void update(){ // 회원정보 수정

    }
}
