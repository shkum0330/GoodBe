package com.goodbe.business.web.dto.search;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "채용공고 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EduResponse {
    private String trprId;
    private String title;
    private String titleLink;
    private String subTltle;
    private String subTitleLink;
    private String telNo;
    private String address;
    private String content;    
}