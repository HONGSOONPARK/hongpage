package com.soon.hongsb.experience;

import org.springframework.data.domain.Sort;

import java.util.List;

public interface ExperienceService {

    Experience create(Experience experience);

    Experience delete(int no);

    List<Experience> findAll(Sort sort);

    Experience findById(int no);

    Experience update(Experience experience);
}
