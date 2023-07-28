package com.goodbe.business.domain.board;

import com.goodbe.business.domain.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(nullable = false)
    private String boardType; // 게시판 종류

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime registerDate; // 등록 시간

    @Column(nullable = false)
    private LocalDateTime lastModifiedDate; // 마지막 수정 시간

    @Column(nullable = false)
    private int likeCount;

    @Builder
    public Post(Member member, String boardType, String title, String content, LocalDateTime registerDate, LocalDateTime lastModifiedDate, int likeCount) {
        this.member = member;
        this.boardType = boardType;
        this.title = title;
        this.content = content;
        this.registerDate = registerDate;
        this.lastModifiedDate = lastModifiedDate;
        this.likeCount = likeCount;
    }
}
