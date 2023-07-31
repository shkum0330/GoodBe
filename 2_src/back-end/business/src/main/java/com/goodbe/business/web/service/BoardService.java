package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.PostWriteRequest;
import com.goodbe.business.web.repository.BoardRepository;
import com.goodbe.business.web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8082") // 인증 서버
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)// 기본 해더
            .build();

    public List<Post> getPostList(){
        return boardRepository.findAll(Sort.by(Sort.Direction.DESC,"createDate"));
    }
    public Boolean getWritePostPage(HttpServletRequest request){
        // todo: 인증 서버로 토큰을 보내 검증,
        String token=resolveToken(request);

        return true;
    }

    @Transactional
    public Long save(PostWriteRequest request){
        request.setMember(memberRepository.findById(1L).get());
        return boardRepository.save(request.toEntity()).getId();
    }
    public Post getPostDetail(Long id){
        Post post=boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 게시글을 찾을 수 없습니다. ID: " + id));
//        log.info("post member = {}",post.getMember().getNickname());
//        Optional<Member> member=memberRepository.findById(post.getMember().getId());
        return post;
    }

    private String resolveToken(HttpServletRequest request){
        String bearerToken=request.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }
        return null;
    }

}
