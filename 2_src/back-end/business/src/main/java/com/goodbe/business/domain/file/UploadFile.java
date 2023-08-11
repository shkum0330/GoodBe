package com.goodbe.business.domain.file;

import com.goodbe.business.domain.board.Post;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.*;

@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadFile {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="file_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    private Post post;

    private String uploadFileName;
    private String storeFileName;
    private String fileUrl;

    @Builder
    public UploadFile(String uploadFileName, String storeFileName) {
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }
}
