package com.goodbe.auth.handler;

import com.goodbe.auth.domain.Member;
import com.goodbe.auth.jwt.TokenInfo;
import com.goodbe.auth.repository.MemberRepository;
import com.goodbe.auth.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class AuthSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private final MemberService memberService;

    @Autowired
    private final MemberRepository memberRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        OAuth2User oauth2User = (OAuth2User) authentication.getPrincipal();
        String email = oauth2User.getAttribute("email");
        Member memberEntity = memberRepository.findByEmail(email);
        TokenInfo tokenInfo = memberService.login(email, email);
        System.out.println(memberEntity.toString());
        String redirectUrl = "";
        // 회원가입 폼 작성안한 경우 -> 회원가입 폼으로 리다이렉션
        if (!memberEntity.getIsSignUp()) {
            redirectUrl = UriComponentsBuilder.fromUriString("http://localhost:3000/SignUp")
                    .queryParam("accessToken", tokenInfo.getAccessToken())
                    .queryParam("refreshToken", tokenInfo.getRefreshToken())
                    .build().toUriString();
            memberEntity.setIsSignUp(true); // 프론트에서 요청받아서 가입여부 설정하도록 변경해야함
            memberRepository.save(memberEntity);
        }
        // 회원가입 폼 작성한 경우 -> 메인페이지로 리다이렉션
        else{
            redirectUrl = UriComponentsBuilder.fromUriString("http://localhost:3000/")
                    .queryParam("accessToken", tokenInfo.getAccessToken())
                    .queryParam("refreshToken", tokenInfo.getRefreshToken())
                    .build().toUriString();
        }
        System.out.println("accessToken: " + tokenInfo.getAccessToken());
        response.sendRedirect(redirectUrl);
    }
}