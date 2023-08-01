package com.goodbe.business.domain.board;

import com.goodbe.business.domain.BaseTimeEntity;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.file.UploadFile;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<UploadFile> files=new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = LAZY)
    @JoinColumn(name = "file_id")
    private UploadFile attachFile;

    @Column(nullable = false)
    private String boardType; // 게시판 종류

    @Column(nullable = false)
    private String title;

    @Lob
    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private int likeCount;

//    @Builder
    public Post(Member member, String boardType, String title, String content, int likeCount) {
        this.member = member;
        this.boardType = boardType;
        this.title = title;
        this.content = content;
        this.likeCount = likeCount;
    }

    @Builder
    public Post(Member member, List<UploadFile> files, UploadFile attachFile, String boardType, String title, String content, int likeCount) {
        this.member = member;
        this.files = files;
        this.attachFile = attachFile;
        this.boardType = boardType;
        this.title = title;
        this.content = content;
        this.likeCount = likeCount;
    }

    public void update(String boardType, String title, String content, List<UploadFile> files, UploadFile attachFile) {
        this.boardType = boardType;
        this.title = title;
        this.content = content;
        this.files = files;
        this.attachFile = attachFile;
    }

}
