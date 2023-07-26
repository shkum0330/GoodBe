package com.goodbe.business.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CompanyMember { // 기업회원 엔티티
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="company_member_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "company_id") // 외래키, '다' 쪽이 외래키를 가지고 있는게 바람직함
    private Company company;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String phone;

}
