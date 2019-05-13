package com.soon.hongsb.skill;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface SkillRepository extends Repository<Skill, Integer> {

    void delete(Skill skill);

    List<Skill> findAll(Sort sort);

    Skill findById(int no);

    Skill save(Skill skill);
}
