package com.goodbe.business.web.dto.jobpost;

import com.goodbe.business.domain.company.JobPost;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "채용공고 목록 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPostHomeResponse {

    private String id;
    private String companyName;
    private String companyData;
    private String jobContent;
    private String sal;
    private String jobData;

    @Builder
    public JobPostHomeResponse(JobPost entity) {
        this.id = entity.getId();
        this.companyName = entity.getCompanyName();
        this.companyData = entity.getCompanyData();
        this.jobContent = entity.getJobContent();
        this.sal = entity.getSal();
        this.jobData = entity.getJobData();
    }
}
