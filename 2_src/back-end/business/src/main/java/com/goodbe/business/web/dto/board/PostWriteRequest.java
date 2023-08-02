package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostWriteRequest {
    private Member member;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int likeCount;
    private List<UploadFile> files=new ArrayList<>();
    private UploadFile attachFile;
    @Builder
    public PostWriteRequest(Post entity) {
        this.member = entity.getMember();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount=0;
    }

    public Post toEntity(){
        //todo: 작성한 유저 정보를 인증 서버에서 가져오기
        return Post.builder().member(member).files(files).attachFile(attachFile).boardType(boardType).title(title).content(content).likeCount(0).build();
    }

}
