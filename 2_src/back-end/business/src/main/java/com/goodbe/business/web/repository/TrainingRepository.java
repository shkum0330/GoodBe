package com.goodbe.business.web.repository;

import com.goodbe.business.domain.Training;
import com.goodbe.business.web.dto.TrainingDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface TrainingRepository extends JpaRepository<Training,Long> {
    @Query(value = "SELECT * FROM training order by RAND() limit 3",nativeQuery = true)
    List<TrainingDto> findByRand();
}
