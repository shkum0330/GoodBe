package com.goodbe.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.goodbe.auth.domain.User;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    public User findByUsername(String username);

    Optional<User> findById(Long userId);
}
