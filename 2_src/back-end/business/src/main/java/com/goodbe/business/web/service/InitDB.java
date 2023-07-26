package com.goodbe.business.web.service;

import com.goodbe.business.domain.TrainingType;
import com.goodbe.business.domain.Training;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

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
        }
    }
}
