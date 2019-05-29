package com.soon.hongsb.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NavigationServiceImpl implements NavigationService {

    @Autowired
    private NavigationRepository repository;

    @Override
    public Navigation create(Navigation navigation) {
        return repository.save(navigation);
    }

    @Override
    public Navigation delete(int no) {
        Navigation navigation = findById(no);
        if(navigation != null){
            repository.delete(navigation);
        }
        return navigation;
    }

    @Override
    public List<Navigation> findAll() {
        return repository.findAll(sortByOrderNoAsc());
    }

    @Override
    public Navigation findById(int no) {
        return repository.findById(no);
    }

    @Override
    public Navigation update(Navigation navigation) {
        return repository.save(navigation);
    }

    private Sort sortByOrderNoAsc() {
        return new Sort(Sort.Direction.ASC, "menuOrder");
    }
}
