package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.mypage.MemberInfoDto;
import com.goodbe.business.web.dto.mypage.MyPageResponse;
import com.goodbe.business.web.dto.mypage.MyPostsResponse;
import com.goodbe.business.web.service.MemberService;
import com.goodbe.business.web.service.MyPageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/mypage")
@Tag(name = "MyPage", description = "마이페이지 API Document")
public class MyPageController {
    private final MemberService memberService;
    private final MyPageService myPageService;

    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8082") // 요청을 인증 서버로 보냄
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();

    @GetMapping("")
    @Operation(summary = "[GET] 마이페이지 초기 화면", description = "프로필 사진과 닉네임을 응답으로 보낸다.")
    public MyPageResponse myPageHome(HttpServletRequest request){ // JWT 갖고와야함
        /*
        인증 로직...
         */
        Member member=memberService.findById(1L); // 임시 회원
        return new MyPageResponse(member);
    }

    @GetMapping("/memberinfo")
    @Operation(summary = "[GET] 마이페이지 개인정보 화면", description = "회원정보를 응답으로 보낸다.")
    public MemberInfoDto memberInfo(HttpServletRequest request){ // JWT 갖고와야함
        /*
        인증 로직...
         */
        Member member=memberService.findById(1L); // 임시 회원
        log.info("회원 = {}",member.toString());
        return new MemberInfoDto(member);
    }

    @GetMapping("/posts")
    @Operation(summary = "[GET] 내가 쓴 글 목록", description = "")
    public List<MyPostsResponse> myPosts(){
        List<Post> posts=myPageService.myPosts(1L);
        return posts.stream().map(MyPostsResponse::new).collect(Collectors.toList());
    }

}
