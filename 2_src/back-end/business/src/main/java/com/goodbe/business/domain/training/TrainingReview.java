package com.goodbe.business.domain.training;


import com.goodbe.business.domain.Member;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrainingReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="training_review_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "training_id")
    private Training training;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(nullable = false)
    private LocalDateTime registerDate; // 작성일

    @Column
    private int rate; // 평점

    @Column
    private String content; // 작성 내용
}
