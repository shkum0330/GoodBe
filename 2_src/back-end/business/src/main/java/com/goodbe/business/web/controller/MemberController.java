package com.goodbe.business.web.controller;

import com.goodbe.business.web.dto.MemberDto;
import com.goodbe.business.web.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;
    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8081")
            .defaultHeader(HttpHeaders.CONTENT_TYPE,  MediaType.APPLICATION_JSON_VALUE)// 기본 해더
            .build();
    @PostMapping("/register")
    public ResponseEntity<MemberDto> register(@RequestBody MemberDto memberDto){
        log.info("business memberdto={}",memberDto);
        return client.post().uri(uriBuilder -> uriBuilder.path("/member/register").build())
                .bodyValue(memberDto)
                .retrieve()
                .toEntity(MemberDto.class)
                .block();
    }
}
