package com.soon.hongsb.skill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository repository;

    @Override
    public Skill create(Skill skill) {
        return repository.save(skill);
    }

    @Override
    public Skill delete(int no) {
        Skill skill = findById(no);
        if(skill != null){
            repository.delete(skill);
        }
        return skill;
    }

    @Override
    public List<Skill> findAll(Sort sort) {
        return repository.findAll(sortByOrderNoAsc());
    }

    @Override
    public Skill findById(int no) {
        return repository.findById(no);
    }

    @Override
    public Skill update(Skill skill) {
        return repository.save(skill);
    }

    private Sort sortByOrderNoAsc() {
        return new Sort(Sort.Direction.ASC, "orderNo");
    }
}
