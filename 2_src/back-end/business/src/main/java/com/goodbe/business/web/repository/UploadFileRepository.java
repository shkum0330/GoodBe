package com.goodbe.business.web.repository;

import com.goodbe.business.domain.file.UploadFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UploadFileRepository extends JpaRepository<UploadFile,Long> {

}
