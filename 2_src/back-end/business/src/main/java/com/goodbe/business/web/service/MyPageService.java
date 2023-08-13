package com.goodbe.business.web.service;


import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.web.repository.BoardRepository;
import com.goodbe.business.web.repository.ConsultingRepository;
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
    private final ConsultingRepository consultingRepository;

    public List<Post> myPosts(Long memberId){
        return boardRepository.findByMemberId(memberId);
    }

    public List<Consulting> myConsultings(Long memberId){
        return consultingRepository.findByMemberId(memberId);
    }
}
