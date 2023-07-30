package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.PostWriteRequest;
import com.goodbe.business.web.repository.BoardRepository;
import com.goodbe.business.web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class BoardService {

    private final BoardRepository boardRepository;
    private final MemberRepository memberRepository;

    public List<Post> getPostList(){
        return boardRepository.findAll(Sort.by(Sort.Direction.DESC,"registerDate"));
    }
    @Transactional
    public Long save(PostWriteRequest requestDto){
        return boardRepository.save(requestDto.toEntity()).getId();
    }
    public Post getPostDetail(Long id){
        Post post=boardRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 게시글을 찾을 수 없습니다. ID: " + id));
//        log.info("post member = {}",post.getMember().getNickname());
//        Optional<Member> member=memberRepository.findById(post.getMember().getId());
        return post;
    }

}
