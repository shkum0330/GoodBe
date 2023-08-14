package com.goodbe.auth.config;

import com.goodbe.auth.jwt.JwtAuthenticationFilter;
import com.goodbe.auth.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.goodbe.auth.service.PrincipalOauthUserService;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity //시큐리티 활성화 -> 기본 스프링 필터 체인에 등록
@RequiredArgsConstructor
public class SecurityConfig  {

    @Autowired
    private PrincipalOauthUserService principalOauthUserService;

    @Autowired
    private CorsConfig corsConfig;

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http

                .cors().configurationSource(corsConfig.corsConfigurationSource()) // CORS 설정 사용
                .and()

                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .authorizeRequests()
                .antMatchers("/member/login").permitAll() // 모든 사용자에게 접근 허용
                .antMatchers("/jwt/jwtlogin").permitAll()
                .antMatchers("/member/test").hasRole("USER") // "USER" 역할을 가진 사용자에게만 접근 허용
                .antMatchers("/user/**").authenticated() // 인증된 사용자에게만 접근 허용
                .antMatchers("/manager/**").hasAuthority("MANAGER") // "MANAGER" 역할을 가진 사용자에게만 접근 허용
                .antMatchers("/admin/**").hasAuthority("ADMIN") // "ADMIN" 역할을 가진 사용자에게만 접근 허용
                .anyRequest().permitAll()

                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)
                // 자체 로그인
                .formLogin()
                //.loginPage("/loginForm") //미인증자일경우 해당 uri를 호출
                //.loginProcessingUrl("/login") //login 주소가 호출되면 시큐리티가 낚아 채서(post로 오는것) 대신 로그인 진행 -> 컨트롤러를 안만들어도 된다.
                //.defaultSuccessUrl("/")

                // oAuth2 소셜로그인
                .and()
                .oauth2Login()
                .loginPage("/loginForm")
                .defaultSuccessUrl("/login/check") // 성공했을때 보내지는 url
                .userInfoEndpoint()
                .userService(principalOauthUserService);// 소셜 로그인이 완료된 뒤의 후처리가 필요함 . Tip.코드x, (엑세스 토큰+사용자 프로필 정보를 받아옴)
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
