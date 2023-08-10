package com.goodbe.business.web.dto.search;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "채용공고 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPostResponse {
    private String id;
    private String companyId;
    private String companyData;
    private String companyUrl;
    private String jobContent;
    private String endDate;
    private String sal;
    private String jobData;    
}
