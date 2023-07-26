package com.goodbe.business.web.service;

import com.goodbe.business.domain.Training;
import com.goodbe.business.web.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class TrainingService {
    private final TrainingRepository trainingRepository;

    public List<Training> findTrainings(){
        return trainingRepository.findAll();
    }
    public List<Training> findRandomTrainings(){
        return trainingRepository.findByRand();
    }
}
