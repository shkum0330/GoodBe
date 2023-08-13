package com.goodbe.business.web.service;

import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.web.repository.JobPostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class JobPostService {
    private final JobPostRepository jobPostRepository;

    @Transactional(readOnly = true)
    public Page<JobPost> jobPostList(Pageable pageable){
        return jobPostRepository.findAll(pageable);
    }
}
