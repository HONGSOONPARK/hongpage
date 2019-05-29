package com.soon.hongsb.portfolio;

import org.springframework.data.domain.Sort;

import java.util.List;

public interface PortfolioService {

    Portfolio create(Portfolio portfolio);

    Portfolio delete(int no);

    List<Portfolio> findAll();

    Portfolio findById(int no);

    Portfolio update(Portfolio portfolio);
}
