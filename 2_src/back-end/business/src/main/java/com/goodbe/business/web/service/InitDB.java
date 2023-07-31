package com.goodbe.business.web.service;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.training.TrainingType;
import com.goodbe.business.domain.training.Training;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
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

            Member m1=new Member("abc@naver.com","1234","김민지","kmj");
            em.persist(m1);
            Member m2=new Member("fgd@gmail.com","1234","강해린","khr");
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

            Post p1=new Post(m1,"취업준비","aaa","aaa",0);
            em.persist(p1);
            Post p2=new Post(m1,"국비교육","bbb","bbb", 5);
            em.persist(p2);
            Post p3=new Post(m2,"학습공유","ccc","ccc",3);
            em.persist(p3);
            Post p4=new Post(m2,"취뽀후기","ddd","ddd", 25);
            em.persist(p4);
            Post p5=new Post(m1,"취업준비","eee","eee",150);
            em.persist(p5);
        }
    }
}
