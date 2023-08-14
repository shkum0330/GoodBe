package com.goodbe.business.web.controller;


import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.web.dto.jobpost.JobPostHomeResponse;
import com.goodbe.business.web.service.JobPostService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/job-post")
public class JobPostController {
    private final JobPostService jobPostService;

//    public List<PostsResponse> postList(@PageableDefault(sort = "id", size = 10, direction = Sort.Direction.DESC) Pageable pageable){
//        Page<Post> posts=boardService.postList(pageable);
//        return posts.stream().map(PostsResponse::new).collect(toList());
//    }
    @GetMapping("")
    public List<JobPostHomeResponse> jobPostList(@PageableDefault(sort = "id", size = 3, direction = Sort.Direction.DESC) Pageable pageable){
        Page<JobPost> posts=jobPostService.jobPostList(pageable);
        return posts.stream().map(JobPostHomeResponse::new).collect(toList());
    }

//    @GetMapping("")
//    public List<JobPostHomeResponse> jobPostListBy(@PageableDefault(sort = "id", size = 3, direction = Sort.Direction.DESC) Pageable pageable){
//        Page<JobPost> posts=jobPostService.jobPostList(pageable);
//        return posts.stream().map(JobPostHomeResponse::new).collect(toList());
//    }
}
