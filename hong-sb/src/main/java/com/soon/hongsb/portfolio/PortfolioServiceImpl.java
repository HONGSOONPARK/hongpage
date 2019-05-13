package com.soon.hongsb.portfolio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    private PortfolioRepository repository;

    @Override
    public Portfolio create(Portfolio portfolio) {
        return repository.save(portfolio);
    }

    @Override
    public Portfolio delete(int no) {
        Portfolio portfolio = findById(no);
        if(portfolio != null){
            repository.delete(portfolio);
        }
        return portfolio;
    }

    @Override
    public List<Portfolio> findAll(Sort sort) {
        return repository.findAll(sortByOrderNoAsc());
    }

    @Override
    public Portfolio findById(int no) {
        return repository.findById(no);
    }

    @Override
    public Portfolio update(Portfolio portfolio) {
        return repository.save(portfolio);
    }

    private Sort sortByOrderNoAsc() {
        return new Sort(Sort.Direction.ASC, "orderNo");
    }
}
