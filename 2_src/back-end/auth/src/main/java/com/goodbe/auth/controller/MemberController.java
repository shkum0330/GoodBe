package com.goodbe.auth.controller;

import com.goodbe.auth.entity.Member;
import com.goodbe.auth.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping(value = "/member")
    public List<Member> getMember(@RequestParam(required = false, defaultValue = "") String name ){
        return memberService.getMemberService( name );
    }

    @PostMapping(value = "/member")
    public String createMember(@RequestBody Member member){
        System.out.println("유저 생성 완료");
        return memberService.createMemberService(member);
    }

}