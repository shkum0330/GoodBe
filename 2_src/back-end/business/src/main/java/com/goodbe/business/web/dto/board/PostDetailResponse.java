package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

@Schema(description = "개별 게시물 응답 DTO")
@Data
public class PostDetailResponse {
    private Long id;
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int likeCount;

    public PostDetailResponse(Post entity) {
        this.id = entity.getId();
        this.nickname = entity.getMember().getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount = entity.getLikeCount();
    }
}
