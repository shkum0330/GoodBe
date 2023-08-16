package com.goodbe.auth.service;

import com.goodbe.auth.controller.AuthController;
import com.goodbe.auth.jwt.TokenInfo;
import com.goodbe.auth.oauth2.provider.GoogleUserInfo;
import com.goodbe.auth.oauth2.provider.KakaoUserInfo;
import com.goodbe.auth.oauth2.provider.NaverUserInfo;
import com.goodbe.auth.oauth2.provider.OAuth2UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import com.goodbe.auth.oauth2.PrincipalDetails;
import com.goodbe.auth.domain.Role;
import com.goodbe.auth.domain.Member;
import com.goodbe.auth.repository.MemberRepository;
import org.springframework.web.client.RestTemplate;

import org.springframework.http.HttpHeaders;
import java.time.LocalDateTime;
import java.util.Map;


@Service
public class PrincipalOauthUserService extends DefaultOAuth2UserService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private MemberRepository memberRepository;

    private final MemberService memberService;

    private AuthController authController;

    @Autowired
    public PrincipalOauthUserService(MemberService memberService) {
        this.memberService = memberService;
    }

    //구글, 카카오, 네이버로 부터 받은 userRequest 데이터에 대한 후처리되는 함수
    //함수 종료시 @AuthenticationPrincipal 어노테이션이 만들어진다.
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {

        //"registraionId" 로 어떤 OAuth 로 로그인 했는지 확인 가능(google,naver등)
        System.out.println("---------------------------------------------------------------\n");
        System.out.println("getClientRegistration: "+userRequest.getClientRegistration());
        System.out.println("getAccessToken: "+userRequest.getAccessToken().getTokenValue());
        System.out.println("getAttributes: "+ super.loadUser(userRequest).getAttributes());
        System.out.println("\n---------------------------------------------------------------");
        //구글 로그인 버튼 클릭 -> 구글 로그인창 -> 로그인 완료 -> code를 리턴(OAuth-Clien라이브러리가 받아줌) -> code를 통해서 AcssToken요청(access토큰 받음)
        // => "userRequest"가 담고 있는 정보
        //회원 프로필을 받아야하는데 여기서 사용되는것이 "loadUser" 함수이다 -> 구글 로 부터 회원 프로필을 받을수 있다.

        /**
         *  OAuth 로그인 정보를 이용한 회원 가입
         */
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuth2UserInfo oAuth2UserInfo =null;

        if(userRequest.getClientRegistration().getRegistrationId().equals("google")) {
            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        }

        else if(userRequest.getClientRegistration().getRegistrationId().equals("naver")) {
            oAuth2UserInfo = new NaverUserInfo((Map)oAuth2User.getAttributes().get("response"));
        }
        else if(userRequest.getClientRegistration().getRegistrationId().equals("kakao")) {
            oAuth2UserInfo = new KakaoUserInfo((Map)oAuth2User.getAttributes().get("kakao_account"),
                    String.valueOf(oAuth2User.getAttributes().get("id")));
        }
        else{
            System.out.println("지원하지 않은 로그인 서비스 입니다.");
        }

        String provider = oAuth2UserInfo.getProvider(); //google , naver, facebook etc
        String providerId = oAuth2UserInfo.getProviderId();
        String username = provider + "_" + providerId;
        String email = oAuth2UserInfo.getEmail();
        Role role = Role.USER;
        Member memberEntity = memberRepository.findByUsername(username);
        // 2. 이미 방문했던 회원인 경우
        //  DB에 해당 이메일을 가진 유저가 있다면
        //  Access Token, Refresh Token 발급해서 돌려주기
        if(memberEntity != null){
            System.out.println("이미 가입하셨습니다.");
            TokenInfo tokenInfo = memberService.login(email,email);
            System.out.println("액세스 토큰: "+tokenInfo.getAccessToken());
            System.out.println("리프레쉬 토큰: "+tokenInfo.getRefreshToken());
            // 발급한 Jwt를 REST 방식으로 비즈니스 서버에 전달
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<TokenInfo> request = new HttpEntity<>(tokenInfo, headers);
            System.out.println(request.toString());
            //ResponseEntity<String> response = restTemplate.postForEntity("localhost:8080/login/token", request, String.class);
            //System.out.println("비즈니스 서버로부터의 응답: " + response.getBody());

        }
        // 1. 처음 방문인 경우
        else{
            // 여기서 회원가입폼으로 리다이렉션 해줘야 함.
            // 회원가입폼 작성 완료되면 해당 정보 받아서 유저 객체 저장.
            LocalDateTime createTime = LocalDateTime.now();
            memberEntity = Member.builder()
                    .memberId(email)
                    .username(username)
                    .password(email)
                    .email(email)
                    .role(role)
                    .provider(provider)
                    .provideId(providerId)
                    .createDate(createTime)
                    .build();
            memberRepository.save(memberEntity);
        }

        return new PrincipalDetails(memberEntity, oAuth2User.getAttributes());
    }
}
