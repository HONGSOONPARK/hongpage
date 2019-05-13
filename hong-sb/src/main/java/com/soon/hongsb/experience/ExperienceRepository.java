package com.soon.hongsb.experience;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ExperienceRepository extends Repository<Experience, Integer> {

    void delete(Experience experience);

    List<Experience> findAll(Sort sort);

    Experience findById(int no);

    Experience save(Experience experience);
}
