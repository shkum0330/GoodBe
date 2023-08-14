package com.goodbe.business.web.controller;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.service.EduService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.nio.file.AccessDeniedException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/edu")
@Tag(name = "Edu", description = "국비교육 API Document")
public class EduController {
    private final EduService eduService;
    private final MemberService memberService;

    @GetMapping("/like/{eduId}")
    @Operation(summary = "[GET] 관심교육 등록", description = "Pathvariable로 eduId를 넘기면 해당 교육을 관심목록에 등록한다.")
    public String likeEdu(@PathVariable String eduId,HttpServletRequest request) throws Exception {
        if(!authorization(request)){
            throw new AccessDeniedException("로그인하세요.");
        }

        Member member=memberService.findById(1L); // 임시 회원, id는 jwt에서 따올거임
        if(!eduService.isLike(member.getId(),eduId)){
            eduService.likeEdu(member,eduId);
            return "관심 교육 목록에 등록하였습니다.";
        } else{
            eduService.unlikeEdu(member,eduId);
            return "관심 교육 목록에서 삭제하였습니다.";
        }

    }

    private Boolean authorization(HttpServletRequest request){
        return true;
    }

}
