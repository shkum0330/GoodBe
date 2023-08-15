package com.goodbe.business.web.dto.mypage;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "마이페이지 관심 채용공고 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyJobPostResponse {
}
