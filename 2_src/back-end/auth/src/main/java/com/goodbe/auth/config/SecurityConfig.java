package com.goodbe.auth.config;

import com.goodbe.auth.oauth2.handler.OAuth2AuthenticationFailureHandler;
import com.goodbe.auth.oauth2.handler.OAuth2AuthenticationSuccessHandler;
import com.goodbe.auth.oauth2.service.CustomOAuth2AuthService;
import com.goodbe.auth.oauth2.service.CustomOidcUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2AuthService customOAuth2AuthService;

    private final CustomOidcUserService customOidcUserService;

    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;

    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;

    private static final String[] PERMIT_URL_ARRAY = {
            /* swagger v2 */
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
    };

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * configure
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                // 기본 설정들
                .httpBasic().disable() // HTTP 기본 인증 비활성화
                .formLogin().disable() // 폼 로그인 비활성화
                .csrf().disable() // CSRF 보안 비활성화
                .cors() // CORS 허용 설정
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // 세션 생성 정책 설정
                .and()
                // 권한 설정 시작
                .authorizeRequests()
                .antMatchers(PERMIT_URL_ARRAY).permitAll() // PERMIT_URL_ARRAY에 있는 URL들은 모두 접근 허용
                .anyRequest().authenticated() // 그 외의 요청은 인증된 사용자만 접근 가능
                // 권한 설정 끝
                // OAuth2 설정 시작
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .oidcUserService(customOidcUserService) // OIDC 사용자 서비스 설정
                .userService(customOAuth2AuthService) // 사용자 서비스 설정
                .and()
                .successHandler(oAuth2AuthenticationSuccessHandler) // OAuth2 로그인 성공 시 핸들러 설정
                .failureHandler(oAuth2AuthenticationFailureHandler); // OAuth2 로그인 실패 시 핸들러 설정
                // OAuth2 설정 끝
    }
}
