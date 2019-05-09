package com.soon.hongsb.about;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface AboutRepository extends Repository<About, Integer> {

    void delete(About about);

    List<About> findAll();

    About findById(int no);

    About save(About about);
}
