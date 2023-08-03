package com.goodbe.business.web.dto.search;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SearchResponse {
    String region;
    String keyword;

    public SearchResponse() {
    }
}
