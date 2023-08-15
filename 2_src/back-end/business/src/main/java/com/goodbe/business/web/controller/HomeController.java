package com.goodbe.business.web.controller;

import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.web.dto.HomeResponse;
import com.goodbe.business.web.dto.TrainingDto;
import com.goodbe.business.web.dto.jobpost.JobPostHomeResponse;
import com.goodbe.business.web.dto.search.EduResponse;
import com.goodbe.business.web.service.EduService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@Tag(name = "Home", description = "홈 화면 API Document")
public class HomeController {
    private final EduService eduService;
    private final MemberService memberService;

    private WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8083/api/search") // 검색 서버와 통신 필요
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();

    @GetMapping("")
    @Operation(summary = "[GET] 검색어로 국비교육 불러오기")
    public List<HomeResponse> searchEduByKeyword(HttpServletRequest request) {
        String keyword=memberService.findById(1L).getFavoriteJob();
        Mono<List<EduResponse>> responseMono=client.get().uri("/edu/{keyword}",keyword)
                .retrieve()
                .bodyToFlux(EduResponse.class)
                .collectList();
        List<EduResponse> edus=responseMono.block();
        List<HomeResponse> result=new ArrayList<>();
        for (int i=0;i<3;i++){ // 3개만 출력
            if(edus.get(i)==null) break;
            result.add(new HomeResponse(edus.get(i).getTitle(),edus.get(i).getSubTltle()));
        }
        return result;
    }

    //메인페이지 호출
    @Operation(summary = "[GET] index 페이지", description = "TODO: 필요한 정보들 출력")
    @GetMapping("/")
    public List<TrainingDto> home() {
        log.info("home controller");
        List<Edu> edus = eduService.findRandomEdus();
        return edus.stream().map(TrainingDto::new).collect(Collectors.toList());
    }
}
