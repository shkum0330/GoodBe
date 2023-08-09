package com.goodbe.auth.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Member {

    // PK
    @Id
    // 데이터베이스에 따라 자동으로 ID가 지정됩니다. - 기본 세팅
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    private String email;
    private String name;
    private String registerDate;
    private String birthDate;
    private String location;
    private String favoriteCompany; // 관심회사
    private String favoriteJob; // 관심직무
    private String sex; // M/F
    private String profileImage; // 프로필 이미지 url
    private boolean isWithdrawn; // 탈퇴 여부
}