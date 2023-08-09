package com.goodbe.auth.controller;

import com.nimbusds.jose.shaded.json.JSONObject;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AccessToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.goodbe.auth.config.auth.PrincipalDetails;
import com.goodbe.auth.config.oauth.provider.OAuth2UserInfo;
import com.goodbe.auth.domain.Role;
import com.goodbe.auth.domain.User;
import com.goodbe.auth.repository.UserRepository;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.time.LocalDateTime;


@RestController
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/auth/{id}")
    public String get(@PathVariable String id) {
        return id;
    }

    @ResponseBody
    @GetMapping("/test/login")
    public String testLogin(
            Authentication authentication,
            @AuthenticationPrincipal PrincipalDetails userDetails) { //세션 정보 받아오기 (DI 의존성 주입)

        //방법 1
        System.out.println("/test/login =============================");
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("authentication:" + principalDetails.getUser());


        //방법 2
        System.out.println("userDetails:" + userDetails.getUser());

        return "세션 정보 확인";
    }
    @ResponseBody
    @GetMapping("/test/oauth/login")
    public String testOAuthLogin(
            Authentication authentication,
            @AuthenticationPrincipal OAuth2User oauth
    ) { //세션 정보 받아오기 (DI 의존성 주입)

        //방법 1
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        System.out.println("authentication: " + oAuth2User.getAttributes());

        //방법 2
        System.out.println("OAuth2User:" + oauth.getAttributes());

        return "OAuth 세션 정보 확인";
    }


    @GetMapping("/")
    public String index() {
        return "index";
    }

    @ResponseBody
    @GetMapping("/user")
    public String user(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        System.out.println("GetMapping(/user) ==========================");
        System.out.println("principalDetails: " + principalDetails );

        return "user";
    }

    @ResponseBody
    @GetMapping("/admin")
    public String admin(){
        return "admin";
    }

    @ResponseBody
    @GetMapping("/manager")
    public String manager(){
        return "manager";
    }

    //스프링 시큐리티가 낚아 챈다(post로 오는것!!)!! -> config 를 통해 해결
//    @ResponseBody
//    @GetMapping("/login")
//    public String login(){
//        return "login";
//    }

    @PostMapping("/join")
    public String join(@ModelAttribute User user){
        user.setRole(Role.USER);
        //user.setRole("USER");
        user.setCreateDate(LocalDateTime.now());

        String rawPassword = user.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);

        user.setPassword(encPassword);
        userRepository.save(user);

        return "redirect:/loginForm";
    }

    @GetMapping("/loginForm")
    public String loginForm(){
        return "loginForm";
    }

    @GetMapping("/joinForm")
    public String joinForm(){
        return "joinForm";
    }

}
