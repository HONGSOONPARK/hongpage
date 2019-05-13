package com.soon.hongsb.experience;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    private ExperienceRepository repository;

    @Override
    public Experience create(Experience experience) {
        return repository.save(experience);
    }

    @Override
    public Experience delete(int no) {
        Experience experience = findById(no);
        if(experience != null){
            repository.delete(experience);
        }
        return experience;
    }

    @Override
    public List<Experience> findAll(Sort sort) {
        return repository.findAll(sortByOrderNoAsc());
    }

    @Override
    public Experience findById(int no) {
        return repository.findById(no);
    }

    @Override
    public Experience update(Experience experience) {
        return repository.save(experience);
    }

    private Sort sortByOrderNoAsc() {
        return new Sort(Sort.Direction.ASC, "orderNo");
    }
}
