package com.goodbe.business.domain.training;

import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.member.MemberEdu;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Edu { // 국비교육 엔티티
    @Id
    @Column(name="trpr_id")
    private String id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "school_id")
    private School school;

    @OneToMany(mappedBy = "edu", cascade = CascadeType.ALL)
    private List<Consulting> consulting;

    @OneToMany(mappedBy = "eduId", cascade = CascadeType.REMOVE)
    private List<MemberEdu> memberEdus=new ArrayList<>(); // 관심 교육

    @OneToMany(mappedBy = "edu")
    private List<EduReview> eduReviews =new ArrayList<>();

    @Column(nullable = false)
    private String title; // 교육명

    @Column
    private String titleLink;

    @Column
    private String subTitle; // 교육명

    @Column
    private String subTitleLink;

    @Column
    private String telNo;

    @Column
    private String address;

    @Column
    private String content;

    @Column
    @Enumerated(EnumType.STRING)
    private TrainingType trainingType; // 대면 여부

    @Column
    private String time; // 주 n일

    @Builder
    public Edu(String id, String title, String titleLink, String subTitle, String subTitleLink, String telNo, String address, String content) {
        this.id = id;
        this.title = title;
        this.titleLink = titleLink;
        this.subTitle = subTitle;
        this.subTitleLink = subTitleLink;
        this.telNo = telNo;
        this.address = address;
        this.content = content;
    }
}
