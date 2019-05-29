package com.soon.hongsb.main;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface NavigationRepository extends Repository<Navigation, Integer> {

    void delete(Navigation navigation);

    List<Navigation> findAll(Sort sort);

    Navigation findById(int no);

    Navigation save(Navigation navigation);
}
