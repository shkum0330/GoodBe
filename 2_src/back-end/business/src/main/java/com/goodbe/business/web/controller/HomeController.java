package com.goodbe.business.web.controller;

import com.goodbe.business.domain.training.Training;
import com.goodbe.business.web.dto.TrainingDto;
import com.goodbe.business.web.service.TrainingService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@Tag(name = "Home", description = "홈 화면 API Document")
public class HomeController {
    private final TrainingService trainingService;

    //메인페이지 호출
    @Operation(summary = "[GET] index 페이지", description = "TODO: 필요한 정보들 출력")
    @GetMapping("/")
    public List<TrainingDto> home() {
        log.info("home controller");
        List<Training> trainings=trainingService.findRandomTrainings();
        return trainings.stream().map(TrainingDto::new).collect(Collectors.toList());
    }
}
