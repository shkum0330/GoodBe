package com.goodbe.search.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbe.search.dto.Edu;
import com.goodbe.search.mapper.EduMapper;

@Service
public class EduServiceImpl implements EduService {

    @Autowired
    private EduMapper eduMapper;

    @Override
    public List<Edu> getAllEdu() {
        return eduMapper.selectEdu();
    }
    
}
