package com.goodbe.business.web.dto.board;

import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
public class PostUpdateRequest {
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private List<UploadFile> files=new ArrayList<>();
    private UploadFile attachFile;

    public PostUpdateRequest(String boardType, String title, String content) {
        this.boardType = boardType;
        this.title = title;
        this.content = content;
    }

}
