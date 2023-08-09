package com.goodbe.auth.service;

import com.goodbe.auth.domain.User;
import com.goodbe.auth.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomMemberDetailsService implements UserDetailsService {

    private final UserRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return memberRepository.findByUsername(username);
                //.map(this::createUserDetails)
               // .orElseThrow(() -> new UsernameNotFoundException("해당하는 유저를 찾을 수 없습니다."));
    }


    private UserDetails createUserDetails(User user) {
        return User.builder()
                .username(user.getUsername())
                //.password(passwordEncoder.encode(user.getPassword()))
               // .roles(user.getRoles().toArray(new String[0])) // 수정된 부분
               .build();
    }

}
