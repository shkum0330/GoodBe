package com.goodbe.business.web.dto.member;

import com.goodbe.business.domain.member.Address;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;



@Schema(description = "회원가입 요청 DTO")
@Data
public class MemberRegisterRequest {

    private String name; // 실명
    private String email;
    private String nickname; // 닉네임
    private Address address;
    private int age;
    private String sex;
    private String favoriteCompany;
    private String favoriteJob;
    private String profileImage; // 프로필사진
    private boolean isWithdrawn; // 탈퇴 여부


}
