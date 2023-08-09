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

            Training t1=new Training("aaa","aaa", TrainingType.ONLINE,"주5일");
            em.persist(t1);
            Training t2=new Training("bbb","bbb", TrainingType.OFFLINE,"주5일");
            em.persist(t2);
            Training t3=new Training("ccc","ccc", TrainingType.OFFLINE,"주4일");
            em.persist(t3);
            Training t4=new Training("ddd","ddd", TrainingType.MIX,"주5일");
            em.persist(t4);
            Training t5=new Training("eee","eee", TrainingType.ONLINE,"주4일");
            em.persist(t5);

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