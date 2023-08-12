package com.goodbe.business.web.service;

import com.goodbe.business.domain.training.Edu;
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

    public List<Edu> findTrainings(){
        return trainingRepository.findAll();
    }
    public List<Edu> findRandomTrainings(){
        return trainingRepository.findByRand();
    }
}
