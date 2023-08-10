package com.goodbe.business.domain.company;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPost { // 채용공고 엔티티
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="job_post_id")
    private String id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    @Column
    private String companyData;

    @Column
    private String companyUrl;

    @Column
    private String jobContent;

    @Column
    private String endDate;

    @Column
    private String sal;

    @Column
    private String jobData;

}
