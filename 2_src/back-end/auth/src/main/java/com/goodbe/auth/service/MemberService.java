package com.goodbe.auth.service;

import com.goodbe.auth.entity.Member;
import com.goodbe.auth.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public String createMemberService(Member member) {
    }

    public List<Member> getMemberService(String name) {
    }
}