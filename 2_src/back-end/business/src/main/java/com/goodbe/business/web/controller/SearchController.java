package com.goodbe.business.web.controller;

import com.goodbe.business.web.dto.search.SearchDetailResponse;
import com.goodbe.business.web.dto.search.SearchRequest;
import com.goodbe.business.web.dto.search.SearchResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
@Tag(name = "Search", description = "국비교육 검색 화면 API Document")
public class SearchController {

    WebClient client=WebClient.create("http://localhost:8090");
    @GetMapping("/recommend")
    @Operation(summary = "[GET] 국비교육 검색 페이지", description = "검색 페이지로 이동")
    public String search(){ // 교육 검색 페이지로 이동
        return "페이지 이동 성공";
    }

    // 요청 예시: /api/recommend/search?region=서울&keyword=싸피
    @GetMapping("/recommend/search")
    @Operation(summary = "[GET] 국비교육 검색", description = "지역, 키워드 입력으로 검색")
    public List<SearchResponse> search(@RequestHeader HttpHeaders headers,
                                      @RequestParam String region,
                                      @RequestParam String keyword){
        SearchRequest searchRequest=new SearchRequest(region,keyword);
        List<SearchResponse> result= client
                .get().uri("api/recommend/search?region="+region+"&keyword="+keyword)
                .retrieve().bodyToFlux(SearchResponse.class).collectList().block();
        return result;
    }

    @GetMapping("/recommend/search/{id}")
    @Operation(summary = "[GET] 국비교육 검색", description = "지역, 키워드 입력으로 검색")
    public SearchDetailResponse searchDetail(@RequestHeader HttpHeaders headers,
                                             @PathVariable Long id){
        SearchDetailResponse result= client
                .get().uri("api/recommend/search/"+String.valueOf(id))
                .retrieve().bodyToMono(SearchDetailResponse.class).block();
        return result;
    }

}
