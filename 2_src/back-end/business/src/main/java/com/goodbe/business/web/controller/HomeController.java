package com.goodbe.business.web.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@Tag(name = "Home", description = "홈 화면 API Document")
public class HomeController {
    //메인페이지 호출
    @Operation(summary = "[GET] index 페이지", description = "TODO: 필요한 정보들 출력")
    @GetMapping("/")
    public String home() {
        log.info("home controller");
        return "home";
    }
}
