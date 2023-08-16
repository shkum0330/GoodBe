package com.goodbe.auth.repository;

<<<<<<< HEAD
import com.sun.xml.bind.v2.schemagen.episode.SchemaBindings;
import org.springframework.data.jpa.repository.JpaRepository;
import com.goodbe.auth.domain.Member;

=======
import org.springframework.data.jpa.repository.JpaRepository;
import com.goodbe.auth.domain.Member;
>>>>>>> master
import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {

<<<<<<< HEAD
    public Member findByUsername(String username);

    Optional<Member> findById(Long userId);

    Optional<Member> findByMemberId(String username);
=======
    // 이걸로 인증 작동
    Optional<Member> findByMemberId(String userId);

    Member findByUsername(String username);

    Member findByEmail(String email);

    Optional<Member> findById(Long userId);
>>>>>>> master
}
