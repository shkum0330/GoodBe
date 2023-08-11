package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.file.UploadFileResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Schema(description = "마이페이지 회원정보 DTO, 요청과 응답이 같은 형식이기 때문에 따로 구분하지 않았음")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberInfoDto {

    private UploadFileResponse profileImage;
    private String email;
    private String name;
    private String nickname;
    private LocalDate birth;
    private Address address;
    private String gender;
    private String favoriteCompany;
    private String favoriteJob;


    @Builder
    public MemberInfoDto(Member entity) {
        if(entity.getProfileImage() != null) this.profileImage = new UploadFileResponse(entity.getProfileImage());
        this.email = entity.getEmail();
        this.name = entity.getName();
        this.nickname = entity.getNickname();
        this.birth = entity.getBirth();
        this.address = entity.getAddress();
        this.gender = entity.getGender();
        this.favoriteCompany = entity.getFavoriteCompany();
        this.favoriteJob = entity.getFavoriteJob();
    }
}
