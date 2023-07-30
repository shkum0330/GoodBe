package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostWriteRequest {
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int likeCount;

    @Builder
    public PostWriteRequest(Post entity) {this.member = entity.getMember();
        this.memberId = this.member.getId();
        this.nickname = this.member.getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount = 0;
    }
    public Post toEntity(){
        // todo: 작성한 유저 정보를 가져오기
        Member member=new Member("abc@gmail.com","1234","김민지","kmj").
        return Post.builder().member(member).nickname(nickname).boardType(boardType).title(title).content(content).likeCount(0).build();
    }

}
