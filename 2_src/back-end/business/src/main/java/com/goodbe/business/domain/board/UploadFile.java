package com.goodbe.business.domain.board;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "member_id")
//    private Member member;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;

    @Column(nullable = false)
    private String saveName; // 사용자가 업로드한 파일명

    @Column(nullable = false)
    private String originalName; // 서버 내부에서 관리하는 파일명

    @Builder
    public UploadFile(String saveName, String originalName) {
        this.saveName = saveName;
        this.originalName = originalName;
    }
}
