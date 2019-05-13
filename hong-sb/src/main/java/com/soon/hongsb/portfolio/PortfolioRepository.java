package com.soon.hongsb.portfolio;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PortfolioRepository extends Repository<Portfolio, Integer> {

    void delete(Portfolio portfolio);

    List<Portfolio> findAll(Sort sort);

    Portfolio findById(int no);

    Portfolio save(Portfolio portfolio);
}
