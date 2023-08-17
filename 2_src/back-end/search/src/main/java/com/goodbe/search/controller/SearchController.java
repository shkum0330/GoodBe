package com.goodbe.search.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodbe.search.dto.*;
import com.goodbe.search.service.EduService;
import com.goodbe.search.service.JobPostService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/search")
public class SearchController {

	private final JobPostService jobPostService;
	private final EduService eduService;

	// 채용공고

	@ApiOperation(value = "전체 채용공고 불러오기", response = List.class)
	@GetMapping("/jobpost/all")
	public List<JobPost> searchAllJobPost() {
		return jobPostService.getAllJobPost();
	}

	@ApiOperation(value = "검색어로 채용공고 불러오기", response = List.class)
	@GetMapping("/jobpost/{keyword}")
	public List<JobPost> searchJobPostByKeyword(@PathVariable String keyword) {
		return jobPostService.getJobPostByKeyword(keyword);
	}

	@ApiOperation(value = "아이디로 채용공고 검색", response = List.class)
	@GetMapping("/jobpost/id/{id}")
	public JobPost searchJobPostById(@PathVariable String id) {
		System.out.println(id);
		return jobPostService.getJobPostById(id);
	}


	// 국비교육

	@ApiOperation(value = "전체 국비교육 불러오기", response = List.class)
	@GetMapping("/edu/all")
	public List<Edu> searchAllEdu() {
		return eduService.getAllEdu();
	}

	@ApiOperation(value = "키워드로 국비교육 검색", response = List.class)
	@GetMapping("/edu/{keyword}")
	public List<Edu> searchEduByKeyword(@PathVariable String keyword) {
		System.out.println(keyword);
		return eduService.getEduByKeyword(keyword);
	}

	@ApiOperation(value = "아이디로 국비교육 검색", response = List.class)
	@GetMapping("/edu/id/{id}")
	public Edu searchEduById(@PathVariable String id) {
		System.out.println(id);
		return eduService.getEduById(id);
	}
}
