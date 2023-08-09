package com.goodbe.business.web.service;


import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class MyPageService {
    private final BoardRepository boardRepository;

    public List<Post> myPosts(Long memberId){
        return boardRepository.findByMemberId(memberId);
    }
}
