package com.goodbe.business.utility;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.PostLike;
import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.training.TrainingType;
import com.goodbe.business.domain.training.Training;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.LocalDateTime;

import static java.time.LocalDateTime.*;

@Component
@RequiredArgsConstructor
public class InitDB {
    private final InitService initService;

    @PostConstruct
    public void init(){
        initService.dbInit();
    }
    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService{
        private final EntityManager em;

        public void dbInit(){

            Member m1=new Member("kumsh0330@naver.com","김민지","minji",
                    LocalDate.of(2004,5,7),
                    new Address("서울특별시 동대문구","겸재로 16","12345"),
                    "여성","현대자동차","경로탐색 SW개발",false);
            em.persist(m1);
            Member m2=new Member("fgd@gmail.com","강해린","haerin");
            em.persist(m2);

            Training t1=new Training("ACG20223000845056","빅데이터의 개념이해와 분석역량강화",
                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000845056&tracseTme=225&trainstCstmrId=500020055611&crseTracseSe=C0031",
                    "러닝핏",null,"02-1600-6842","서울 마포구","");
            em.persist(t1);
            Training t2=new Training("ACG20223000845071","R을 활용한 빅데이터 및 통계분석",
                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000845071&tracseTme=225&trainstCstmrId=500020055611&crseTracseSe=C0031",
                    "러닝핏",null,"02-1600-6842","서울 마포구","");
            em.persist(t2);
            Training t3=new Training("ACG20223000847541","파이썬머신러닝완벽가이드",
                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847541&tracseTme=19&trainstCstmrId=500020014456&crseTracseSe=C0031",
                    "(주)알파코",null,"02-2163-5724","서울 영등포구","");
            em.persist(t3);
            Training t4=new Training("ACG20223000847739","SW코딩강사 양성과정",
                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847739&tracseTme=49&trainstCstmrId=500020020261&crseTracseSe=C0031",
                    "(사)한국디지털컨버전스협회",null,"02-2038-0024","서울 영등포구","");
            Training t5=new Training("ACG20223000847832","알아두면 쓸모 있는 신비한 사이버보안",
                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847832&tracseTme=14&trainstCstmrId=500020014456&crseTracseSe=C0031",
                    "(주)알파코",null,"02-2163-5724","서울 영등포구","");

            Post p1=new Post(m1,"취업준비",m1.getNickname(),"aaa","aaa",0);
            em.persist(p1);
            Post p2=new Post(m1,"국비교육",m1.getNickname(),"bbb","bbb", 5);
            em.persist(p2);
            Post p3=new Post(m2,"학습공유",m2.getNickname(),"ccc","ccc",3);
            em.persist(p3);
            Post p4=new Post(m2,"취뽀후기",m2.getNickname(),"ddd","ddd", 25);
            em.persist(p4);
            Post p5=new Post(m1,"취업준비",m1.getNickname(),"eee","eee",150);
            em.persist(p5);

            Comment c1=new Comment(m2,p1,"안녕하세요");
            em.persist(c1);
            Comment c2=new Comment(m2,p1,"반갑습니다.");
            em.persist(c2);
        }
    }
}
