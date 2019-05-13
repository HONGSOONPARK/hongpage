package com.soon.hongsb.skill;

import org.springframework.data.domain.Sort;

import java.util.List;

public interface SkillService {

    Skill create(Skill skill);

    Skill delete(int no);

    List<Skill> findAll(Sort sort);

    Skill findById(int no);

    Skill update(Skill skill);
}
