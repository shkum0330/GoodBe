package com.goodbe.search.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodbe.search.dto.*;
import com.goodbe.search.service.JobPostService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/search")
public class SearchController {
    
    @Autowired
    public JobPostService jobPostService;

    @ApiOperation(value = "전체 채용공고 불러오기", response = List.class)
    @GetMapping("/all")
    public List<JobPost> searchAllJobPost(){
       return jobPostService.getAllJobPost(); 
    }
}
