package com.goodbe.auth.repository;

import com.goodbe.auth.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    Member save(Member member);
    Optional<Member> findByMemberId(int id);
    Optional<Member> findByName(String name);
    List<Member> findAll();
}
