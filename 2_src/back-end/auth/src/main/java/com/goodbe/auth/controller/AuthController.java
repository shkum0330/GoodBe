package com.goodbe.auth.controller;

import com.goodbe.auth.jwt.TokenInfo;
import com.goodbe.auth.service.PrincipalOauthUserService;
import com.goodbe.auth.service.MemberService;
import com.nimbusds.oauth2.sdk.TokenResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class AuthController {

    @GetMapping("/login/google")
    public String googleLogin(
    ){
        return "redirect:/oauth2/authorization/google";
    }
}
