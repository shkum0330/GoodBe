package com.goodbe.business.web.dto.board.post;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

@Schema(description = "게시물 리스트 응답 DTO")
@Data
public class PostsResponse {

    private Long id;
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int likeCount;

    public PostsResponse(Post entity) {
        this.id = entity.getId();
//        this.member = entity.getMember();
        this.memberId = entity.getMember().getId();
        this.nickname = entity.getMember().getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount = entity.getLikeCount();
    }

}
