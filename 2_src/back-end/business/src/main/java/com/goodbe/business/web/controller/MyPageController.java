package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.mypage.MyPostsResponse;
import com.goodbe.business.web.service.MemberService;
import com.goodbe.business.web.service.MyPageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

        @GetMapping("/posts")
    @Operation(summary = "[GET] 게시판 페이지", description = "페이징 처리하여 게시글 목록을 띄움")
    public List<MyPostsResponse> myPosts(){
        List<Post> posts=myPageService.myPosts(1L);
        return posts.stream().map(MyPostsResponse::new).collect(Collectors.toList());
    }

}
