package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.web.dto.board.PostUpdateRequest;
import com.goodbe.business.web.dto.board.PostWriteRequest;
import com.goodbe.business.web.repository.BoardRepository;
import com.goodbe.business.web.repository.MemberRepository;
import com.goodbe.business.web.repository.UploadFileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;
    private final UploadFileRepository uploadFileRepository;
    private final FileStore fileStore;

    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8082") // 인증 서버
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)// 기본 해더
            .build();

    @Transactional(readOnly = true)
    public Page<Post> postList(Pageable pageable){
        return boardRepository.findAll(pageable);
    }
    public Boolean writePost(HttpServletRequest request){
        // todo: 인증 서버로 토큰을 보내 검증
        String token=resolveToken(request);

        return true;
    }

    @Transactional
    public Long writePost(List<MultipartFile> imageFiles, MultipartFile singleAttachFile, PostWriteRequest request) throws IOException {

        List<UploadFile> storeImageFiles=null;
        UploadFile attachFile = null;

        //todo: 리팩토링 필요...
        if(imageFiles != null) {
            storeImageFiles = fileStore.storeFiles(imageFiles);
            uploadFileRepository.saveAll(storeImageFiles);
            request.setFiles(storeImageFiles);
        }

        if(singleAttachFile != null) {
            attachFile = fileStore.storeFile(singleAttachFile);
            request.setAttachFile(attachFile);
            uploadFileRepository.save(attachFile);
        }
        Long id=boardRepository.save(request.toEntity()).getId();
        Post post=boardRepository.findById(id).get();

        if(imageFiles != null){
            for(UploadFile file:storeImageFiles){
                file.setPost(post);
            }
        }
        if(singleAttachFile != null){
            attachFile.setPost(post);
        }

        return id;
    }

    public ResponseEntity<Resource> downloadAttach(Long postId)
            throws MalformedURLException {
        Post post = boardRepository.findById(postId).get();
        String storeFileName = post.getAttachFile().getStoreFileName();
        String uploadFileName = post.getAttachFile().getUploadFileName();
        UrlResource resource = new UrlResource("file:" + fileStore.getFullPath(storeFileName));
        log.info("uploadFileName={}", uploadFileName);
        String encodedUploadFileName = UriUtils.encode(uploadFileName, StandardCharsets.UTF_8);
        String contentDisposition = "attachment; filename=\"" + encodedUploadFileName + "\"";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition)
                .body(resource);
    }

    public Post postDetail(Long id){
        Post post=boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 게시글을 찾을 수 없습니다. ID: " + id));
//        log.info("post member = {}",post.getMember().getNickname());
//        Optional<Member> member=memberRepository.findById(post.getMember().getId());
        return post;
    }

    public Long update(Long id,List<MultipartFile> imageFiles, MultipartFile singleAttachFile, PostUpdateRequest request) throws IOException{
        Post post = boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다. id="+id));

        List<UploadFile> uploadFiles= uploadFileRepository.findByPostId(id);
        for (UploadFile file:uploadFiles){
            fileStore.deleteFile(file.getStoreFileName());
        }

        if(imageFiles != null){
            List<UploadFile> storeImageFiles = fileStore.storeFiles(imageFiles);
            uploadFileRepository.saveAll(storeImageFiles);
            request.setFiles(storeImageFiles);
            for(UploadFile file:storeImageFiles){
                file.setPost(post);
            }
        }
        if(singleAttachFile != null){
            UploadFile attachFile = fileStore.storeFile(singleAttachFile);
            request.setAttachFile(attachFile);
            attachFile.setPost(post);
            uploadFileRepository.save(attachFile);
        }

        post.update(request.getBoardType(),request.getTitle(),request.getContent(),request.getFiles(),request.getAttachFile());

        return id;
    }
    public void deletePost(@PathVariable Long id) {
        //todo: 권한 체크
        Post post = boardRepository.findById(id).orElseThrow(()-> new IllegalArgumentException("삭제할 게시글이 없습니다. id="+id));
        List<UploadFile> uploadFiles= uploadFileRepository.findByPostId(id);
        for (UploadFile file:uploadFiles){
            fileStore.deleteFile(file.getStoreFileName());
        }
        boardRepository.delete(post);

    }
    private String resolveToken(HttpServletRequest request){
        String bearerToken=request.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }
        return null;
    }

}
