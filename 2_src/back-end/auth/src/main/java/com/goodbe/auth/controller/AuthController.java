package com.goodbe.auth.controller;

import com.goodbe.auth.domain.Member;
import com.goodbe.auth.jwt.JwtTokenProvider;
import com.goodbe.auth.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Claims;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @GetMapping("/login/google")
    public void googleLogin(HttpServletResponse response) throws IOException {
        response.sendRedirect("/oauth2/authorization/google");
    }

    @GetMapping("/jwt/decoding")
    public String getEmailByJwt(String accessToken) {
        Claims claims = jwtTokenProvider.parseClaims(accessToken);
        String userName = claims.getSubject();
        Member memberEntity = memberRepository.findByUsername(userName);
        String email = memberEntity.getEmail();
        log.info("email: {}", email);
        return email;
    }
}
