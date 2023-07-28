package com.goodbe.business.domain;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.training.TrainingReview;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member { // 일반회원 엔티티
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="member_id")
    private Long id;

    @OneToMany(mappedBy = "member")
    private List<TrainingReview> trainingReviews=new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Post> posts=new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments=new ArrayList<>();

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name; // 실명

    @Column(nullable = false)
    private String nickname; // 닉네임

    @Column(nullable = true)
    private int age;

    @Column(nullable = false)
    private LocalDateTime registerdTime;

    public Member(String email, String password, String name, String nickname, LocalDateTime registerdTime) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.nickname = nickname;
        this.registerdTime = registerdTime;
    }
}
