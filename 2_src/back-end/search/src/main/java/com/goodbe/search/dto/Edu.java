package com.goodbe.search.dto;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Document(indexName = "jobpost")
public class Edu {
    @Id
    private String eduId;
    private String title;
    private String titleLink;
    private String company;
    private String companyLink;
    private String telNo;
    private String address;
    private String content;    
    private String period;
    private String onoff;
    private String expense;
    private String realExpense;    
    private String detail;
    private String man;
}