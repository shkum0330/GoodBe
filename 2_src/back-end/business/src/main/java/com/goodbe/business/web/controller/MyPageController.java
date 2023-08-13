package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.board.post.PostUpdateRequest;
import com.goodbe.business.web.dto.mypage.*;
import com.goodbe.business.web.service.MemberService;
import com.goodbe.business.web.service.MyPageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
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
    public MemberInfoResponse memberInfo(HttpServletRequest request){ // JWT 갖고와야함
        /*
        인증 로직...
         */
        Member member=memberService.findById(1L); // 임시 회원
        return new MemberInfoResponse(member);
    }

    @PostMapping("/memberinfo/update")
    @Operation(summary = "[POST] 마이페이지 회원정보 수정", description = "회원정보를 수정")
    public MemberInfoResponse memberInfoUpdate(@RequestPart(value = "profileImage",required = false) MultipartFile profileImage,
                                               @RequestPart(value = "memberUpdateRequest") MemberUpdateRequest memberUpdateRequest,
                                               HttpServletRequest request) throws IOException {
        /*
        인증 로직...
         */

        Member member=memberService.findById(1L); // 임시 회원, id는 jwt에서 따올거임
        memberService.update(1L,profileImage,memberUpdateRequest);
        return new MemberInfoResponse(member);
    }

    //todo: 입장하기 버튼 누르면 상담하러 들어갈 수 있어야 하고, 끝나면 상담 내역을 삭제해야 함
    @GetMapping("/consulting")
    @Operation(summary = "[GET] 마이페이지 교육 상담 관리", description = "예약한 교육 상담들을 응답으로 보낸다.")
    public List<MyConsultingResponse> myConsulting(HttpServletRequest request){ // JWT 갖고와야함
        /*
        인증 로직...
         */
        Member member=memberService.findById(1L); // 회원 정보를 가져온다.
        List<Consulting> consultings=myPageService.myConsultings(1L);
        List<MyConsultingResponse> result=new ArrayList<>();

        for (Consulting c:consultings) {
            result.add(new MyConsultingResponse(c));
        }
        return result;
    }


    @GetMapping("/edu")
    @Operation(summary = "[GET] 마이페이지 관심 교육 관리", description = "회원의 관심 교육들을 응답으로 보낸다.")
    public MemberInfoResponse interestedJobPosting(HttpServletRequest request){ // JWT 갖고와야함
        /*
        인증 로직...
         */
        Member member=memberService.findById(1L); // 임시 회원
        return new MemberInfoResponse(member);
    }



    @GetMapping("/posts")
    @Operation(summary = "[GET] 내가 쓴 글 목록", description = "내가 쓴 글들을 응답으로 보낸다.")
    public List<MyPostsResponse> myPosts(){
        List<Post> posts=myPageService.myPosts(1L);
        return posts.stream().map(MyPostsResponse::new).collect(Collectors.toList());
    }

}
