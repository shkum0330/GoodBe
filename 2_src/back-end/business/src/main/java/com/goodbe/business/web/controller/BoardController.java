package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.board.PostDetailResponse;
import com.goodbe.business.web.dto.board.PostUpdateRequest;
import com.goodbe.business.web.dto.board.PostWriteRequest;
import com.goodbe.business.web.dto.board.PostsResponse;
import com.goodbe.business.web.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
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
    public List<PostsResponse> postList(@PageableDefault(sort = "id", size = 10, direction = Sort.Direction.DESC) Pageable pageable){
        Page<Post> posts=boardService.postList(pageable);
        return posts.stream().map(PostsResponse::new).collect(toList());
    }
    @GetMapping("/{id}")
    @Operation(summary = "[GET] 게시글 보기", description = "리스트에서 클릭하면 상세보기로 이동")
    public PostDetailResponse postDetail(@PathVariable Long id){
        log.info("{}",id);
        Post post=boardService.postDetail(id);

        return new PostDetailResponse(post);
    }
    @GetMapping("/write")
    @Operation(summary = "[GET] 게시글 작성 페이지", description = "게시글 작성 페이지 이동")
    public String writePost(HttpServletRequest request){
        if(boardService.writePost(request)) return "게시글 작성 페이지 이동";
        else throw new AccessDeniedException("권한이 없습니다.");
    }
    @PostMapping("/write")
    @Operation(summary = "[POST] 게시글 작성", description = "게시글 작성")
    public Long writePost(@RequestPart(value = "imageFiles",required = false) List<MultipartFile> imageFiles,
            @RequestPart(value = "attachFile",required = false) MultipartFile singleAttachFile,
            @RequestPart(value = "postWriteRequest") PostWriteRequest request) throws IOException {

        return boardService.writePost(imageFiles,singleAttachFile,request);
    }
    @GetMapping("/images/{filename}")
    @Operation(summary = "[GET] 이미지 조회", description = "<img> 태그로 이미지를 조회")
    public Resource downloadImage(@PathVariable String filename) throws MalformedURLException {
        return new UrlResource("file:" + fileStore.getFullPath(filename));
    }

    @GetMapping("/attach/{postId}")
    @Operation(summary = "[GET] 파일 다운로드", description = "이미지 id를 요청하도록 했다.")
    public ResponseEntity<Resource> downloadAttach(@PathVariable Long postId)
            throws MalformedURLException {
        return boardService.downloadAttach(postId);
    }

    @GetMapping("/{id}/update")
    @Operation(summary = "[GET] 게시글 수정", description = "게시글 수정 페이지 이동")
    public Post updatePost(@PathVariable Long id, HttpHeaders headers){
        return boardService.postDetail(id);
    }

    @PostMapping("/{id}/update")
    @Operation(summary = "[POST] 게시글 수정", description = "게시글 수정")
    public Long updatePost(@PathVariable Long id,
                           @RequestPart(value = "imageFiles",required = false) List<MultipartFile> imageFiles,
                          @RequestPart(value = "attachFile",required = false) MultipartFile singleAttachFile,
                          @RequestPart(value = "postUpdateRequest") PostUpdateRequest request) throws IOException {

        return boardService.update(id,imageFiles,singleAttachFile,request);
    }

}
