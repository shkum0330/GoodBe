package com.goodbe.business.web.service;


import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.MemberEdu;
import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.web.repository.BoardRepository;
import com.goodbe.business.web.repository.ConsultingRepository;
import com.goodbe.business.web.repository.EduRepository;
import com.goodbe.business.web.repository.MemberEduRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class MyPageService {
    private final BoardRepository boardRepository;
    private final ConsultingRepository consultingRepository;
    private final EduRepository eduRepository;
    private final MemberEduRepository memberEduRepository;

    public List<Post> myPosts(Long memberId){
        return boardRepository.findByMemberId(memberId);
    }

    public List<Consulting> myConsultings(Long memberId){
        return consultingRepository.findByMemberId(memberId);
    }
    public List<Edu> myEdus(Long memberId){
        List<MemberEdu> memberEdus=memberEduRepository.findAllByMemberId(memberId);
        List<Edu> result=new ArrayList<>();
        for (int i=0;i<memberEdus.size();i++){
            result.add(memberEdus.get(i).getEduId());
        }
        return result;
    }
}
