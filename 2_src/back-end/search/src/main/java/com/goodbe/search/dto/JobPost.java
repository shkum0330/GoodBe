package com.goodbe.search.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(indexName = "jobpost")
public class JobPost {
    @Id
    private String jobId;
    private String companyName;
    private String wantedTitle;
    private String companyUrl;
    private String degree;
    private String major;
    private String address;
    private String workAddress;    
    private String preference;    
    private String certificate;    
    private String jobContent;    
    private String sal;    
    private String employmentForm;    
    private String end_date;    
}
