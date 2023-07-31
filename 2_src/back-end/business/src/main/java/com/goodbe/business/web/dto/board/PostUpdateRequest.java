package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostUpdateRequest {
    private Long id;
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int likeCount;

    public PostUpdateRequest(Post entity) {
        this.id = entity.getId();
        this.member = entity.getMember();
        this.memberId = this.member.getId();
        this.nickname = this.member.getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount = entity.getLikeCount();
    }
}
