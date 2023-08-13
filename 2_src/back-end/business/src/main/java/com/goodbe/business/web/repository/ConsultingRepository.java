package com.goodbe.business.web.repository;

import com.goodbe.business.domain.member.Consulting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsultingRepository extends JpaRepository<Consulting,Long> {
    List<Consulting> findByMemberId(Long MemberId);
}
