package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.PostDetailResponse;
import com.goodbe.business.web.dto.board.PostsResponse;
import com.goodbe.business.web.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.stream.Collectors.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/board")
@Tag(name = "Board", description = "게시판 API Document")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/")
    @Operation(summary = "[GET] 게시판 페이지", description = "게시글 목록을 띄움")
    public List<PostsResponse> getPostList(){
        List<Post> posts=boardService.getPostList();
        return posts.stream().map(p->new PostsResponse(p)).collect(toList());
    }
    @GetMapping("/{id}")
    @Operation(summary = "[GET] 게시글 보기", description = "리스트에서 클릭하면 상세보기로 이동")
    public PostDetailResponse getPostDetail(@PathVariable Long id){
        log.info("{}",id);
        return new PostDetailResponse(boardService.getPostDetail(id));
    }
}
