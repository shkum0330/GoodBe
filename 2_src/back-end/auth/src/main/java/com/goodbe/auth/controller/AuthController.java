package com.goodbe.auth.controller;

import com.goodbe.auth.service.PrincipalOauthUserService;
import com.goodbe.auth.service.MemberService;
import com.nimbusds.oauth2.sdk.TokenResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.goodbe.auth.oauth2.PrincipalDetails;
import com.goodbe.auth.domain.Role;
import com.goodbe.auth.domain.Member;
import com.goodbe.auth.repository.MemberRepository;


import java.time.LocalDateTime;


@Controller
@RequiredArgsConstructor
public class AuthController {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final MemberService memberService;
    private final PrincipalOauthUserService principalOauthUserService;

    private static final String ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
    private static final String CLIENT_ID = "102133184952-9ihuv92pb6jb2n6cvouaisemgo16li1r.apps.googleusercontent.com";
    private static final String REDIRECT_URI = "http://localhost:8089/login/oauth2/code/google";
    private static final String RESPONSE_TYPE = "code";
    private static final String SCOPE = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile";


    @GetMapping("/login/google")
    public String googleLogin() {
        return "redirect:" + ENDPOINT + "?client_id=" + CLIENT_ID + "&redirect_uri=" + REDIRECT_URI
                + "&response_type=" + RESPONSE_TYPE + "&scope=" + SCOPE;
    }

    @GetMapping("/login/oauth2/code/google")
    public String oauthLogin(String code) {
        System.out.println("code: "+code);
        //String token = userService.oauthLogin(code);
        return "수신 양호";
    }

    @ResponseBody
    @GetMapping("/test/login")
    public String testLogin(
            Authentication authentication,
            @AuthenticationPrincipal PrincipalDetails userDetails) { //세션 정보 받아오기 (DI 의존성 주입)
        //방법 1
        System.out.println("/test/login =============================");
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();
        System.out.println("authentication:" + principalDetails.getMember());
        //방법 2
        System.out.println("userDetails:" + userDetails.getMember());
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
        return "socialLogin success";
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


    @PostMapping("/join")
    public String join(@ModelAttribute Member member){
        member.setRole(Role.USER);
        //user.setRole("USER");
        member.setCreateDate(LocalDateTime.now());

        String rawPassword = member.getPassword();
        String encPassword = passwordEncoder.encode(rawPassword);

        member.setPassword(encPassword);
        memberRepository.save(member);

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
