package com.goodbe.business.web.service;

import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.web.repository.EduRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EduService {
    private final EduRepository eduRepository;

    public List<Edu> findTrainings(){
        return eduRepository.findAll();
    }
    public List<Edu> findRandomTrainings(){
        return eduRepository.findByRand();
    }
}
