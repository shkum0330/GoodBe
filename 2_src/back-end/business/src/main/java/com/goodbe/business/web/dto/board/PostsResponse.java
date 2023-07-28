package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.Member;
import com.goodbe.business.domain.board.Post;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostsResponse {

    private Long id;
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private LocalDateTime registerDate; // 등록 시간
    private LocalDateTime lastModifiedDate; // 마지막 수정 시간
    private int likeCount;

    public PostsResponse(Post entity) {
        this.id = entity.getId();
//        this.member = entity.getMember();
        this.memberId = entity.getMember().getId();
        this.nickname = entity.getMember().getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.registerDate = entity.getRegisterDate();
//        this.lastModifiedDate = entity.getLastModifiedDate();
        this.likeCount = entity.getLikeCount();
    }

}
