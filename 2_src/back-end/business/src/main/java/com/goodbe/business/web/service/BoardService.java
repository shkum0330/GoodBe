package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.PostDetailResponse;
import com.goodbe.business.web.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class BoardService {
    private final BoardRepository boardRepository;

    public List<Post> getPostList(){
        return boardRepository.findAll(Sort.by(Sort.Direction.DESC,"registerDate"));
    }
    public Post getPostDetail(Long id){
        return boardRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }
}
