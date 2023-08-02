package com.goodbe.business.domain.company;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPosting { // 채용공고 엔티티
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="job_posting_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

}
