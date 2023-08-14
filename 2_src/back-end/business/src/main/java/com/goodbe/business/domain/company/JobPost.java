package com.goodbe.business.domain.company;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPost { // 채용공고 엔티티
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="job_post_id")
    private String id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @Column
    private String companyName;

    @Column
    private String companyData;

    @Column
    private String companyUrl;

    @Column
    @Lob
    private String jobContent;

    @Column
    private String endDate;

    @Column
    private String sal;

    @Column
    private String jobData;

    @Builder
    public JobPost(String id, String companyName, String companyData, String companyUrl, String jobContent, String endDate, String sal, String jobData) {
        this.id = id;
        this.companyName = companyName;
        this.companyData = companyData;
        this.companyUrl = companyUrl;
        this.jobContent = jobContent;
        this.endDate = endDate;
        this.sal = sal;
        this.jobData = jobData;
    }
}
