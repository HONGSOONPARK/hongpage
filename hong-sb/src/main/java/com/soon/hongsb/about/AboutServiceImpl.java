package com.soon.hongsb.about;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutServiceImpl implements AboutService {

    @Autowired
    private AboutRepository repository;

    @Override
    public About create(About about) {
        return repository.save(about);
    }

    @Override
    public About delete(int no) {
        About about = findById(no);
        if(about != null){
            repository.delete(about);
        }
        return about;
    }

    @Override
    public List<About> findAll() {
        return repository.findAll();
    }

    @Override
    public About findById(int no) {
        return repository.findById(no);
    }

    @Override
    public About update(About about) {
        return repository.save(about);
    }
}
