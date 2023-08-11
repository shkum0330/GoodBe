package com.goodbe.business.web.service;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.NoSuchElementException;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class MemberService { // 테스트용이므로 배포 버전에선 삭제해야함
    private final MemberRepository memberRepository;

    public Member findById(Long memberId){
        return memberRepository.findById(memberId).orElseThrow(()->new NoSuchElementException("존재하지 않는 회원입니다."));
    }

}
