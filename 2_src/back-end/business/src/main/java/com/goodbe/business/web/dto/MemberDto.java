package com.goodbe.business.web.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class MemberDto {
    private Long id;
    private String email;
    private String name;
    private String password;

    @Builder
    public MemberDto(String email, String name, String password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

}
