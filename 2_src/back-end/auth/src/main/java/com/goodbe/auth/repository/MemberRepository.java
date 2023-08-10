package com.goodbe.auth.repository;

import com.sun.xml.bind.v2.schemagen.episode.SchemaBindings;
import org.springframework.data.jpa.repository.JpaRepository;
import com.goodbe.auth.domain.Member;

import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {

    public Member findByUsername(String username);

    Optional<Member> findById(Long userId);

    Optional<Member> findByMemberId(String username);
}
