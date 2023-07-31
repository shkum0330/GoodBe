package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.board.PostDetailResponse;
import com.goodbe.business.web.dto.board.PostWriteRequest;
import com.goodbe.business.web.dto.board.PostsResponse;
import com.goodbe.business.web.service.BoardService;
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
import java.util.List;

import static java.util.stream.Collectors.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/board")
@Tag(name = "Board", description = "게시판 API Document")
public class BoardController {

    private final BoardService boardService;
    private final FileStore fileStore;

    @GetMapping("")
    @Operation(summary = "[GET] 게시판 페이지", description = "게시글 목록을 띄움")
    public List<PostsResponse> getPostList(){
        List<Post> posts=boardService.getPostList();
        return posts.stream().map(p->new PostsResponse(p)).collect(toList());
    }
    @GetMapping("/{id}")
    @Operation(summary = "[GET] 게시글 보기", description = "리스트에서 클릭하면 상세보기로 이동")
    public PostDetailResponse getPostDetail(@PathVariable Long id){
        log.info("{}",id);
        Post post=boardService.getPostDetail(id);

        return new PostDetailResponse(post);
    }
    @GetMapping("/write")
    @Operation(summary = "[GET] 게시글 작성 페이지", description = "게시글 작성 페이지 이동")
    public String getWritePostPage(HttpServletRequest request){
        if(boardService.getWritePostPage(request)) return "게시글 작성 페이지 이동";
        else throw new AccessDeniedException("권한이 없습니다.");
    }
    @PostMapping("/write")
    @Operation(summary = "[POST] 게시글 작성", description = "게시글 작성")
    public Long writePost(@RequestPart(value = "file",required = false) List<MultipartFile> imageFiles,
            @RequestPart(value = "file",required = false) MultipartFile attatchFile,
            @RequestPart(value = "postWriteRequest") PostWriteRequest request){
        return boardService.save(request);
    }
    @GetMapping("/{id}/update")
    @Operation(summary = "[GET] 게시글 수정", description = "게시글 수정 페이지 이동")
    public Post getUpdatePage(@PathVariable Long id, HttpHeaders headers){
        return boardService.getPostDetail(id);
    }

    @PostMapping("/{id}/update")
    @Operation(summary = "[POST] 게시글 수정", description = "게시글 수정")
    public PostDetailResponse updatePost(@PathVariable Long id, HttpHeaders headers){
        return new PostDetailResponse(boardService.getPostDetail(id));
    }
}
