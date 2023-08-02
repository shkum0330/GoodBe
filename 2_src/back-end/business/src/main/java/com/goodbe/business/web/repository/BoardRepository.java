package com.goodbe.business.web.repository;

import com.goodbe.business.domain.board.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Post,Long> {

}
