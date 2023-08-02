package com.goodbe.business.web.dto;

import com.goodbe.business.domain.training.TrainingType;
import com.goodbe.business.domain.training.Training;
import lombok.Data;

@Data
public class TrainingDto {
    private String title; // 교육명
    private String name; // 기관명
    private TrainingType trainingType; // 대면 여부
    private String time; // 주 n일

    public TrainingDto(Training entity) {
        this.title = entity.getTitle();
        this.name = entity.getName();
        this.trainingType = entity.getTrainingType();
        this.time = entity.getTime();
    }
}
