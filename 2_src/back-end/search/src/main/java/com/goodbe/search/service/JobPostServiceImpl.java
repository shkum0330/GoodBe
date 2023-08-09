package com.goodbe.search.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbe.search.dto.JobPost;
import com.goodbe.search.mapper.JobPostMapper;

@Service
public class JobPostServiceImpl implements JobPostService {

    @Autowired
    private JobPostMapper jobPostMapper;

    @Override
    public List<JobPost> getAllJobPost() {
        return jobPostMapper.selectJobData();
    }

    @Override
    public List<JobPost> getJobPostByKeyword(String keyword) {
        keyword = '%' + keyword + '%';
        return jobPostMapper.selectJobDataByKeyword(keyword);
    }
    
}
