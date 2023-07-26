package com.goodbe.business.domain;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Training { // 국비교육 엔티티
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
//    @ManyToOne
    private Long school_id; // 교육기관id

    @Column(nullable = false)
    private String title; // 교육명

    @Column(nullable = false)
    private String name; // 기관명

    @Column
    @Enumerated(EnumType.STRING)
    private TrainingType trainingType; // 대면 여부

    @Column
    private String time; // 주 n일

    @Builder
    public Training(String title, String name, TrainingType trainingType, String time) {
        this.title = title;
        this.name = name;
        this.trainingType = trainingType;
        this.time = time;
    }
}
