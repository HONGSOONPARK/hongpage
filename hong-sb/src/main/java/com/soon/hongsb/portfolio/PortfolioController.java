package com.soon.hongsb.portfolio;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/portfolio"})
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @PostMapping
    public Portfolio create(@RequestBody Portfolio portfolio) {
        return portfolioService.create(portfolio);
    }

    @GetMapping(path = {"/find/{no}"})
    public Portfolio findOne(@PathVariable("no") int no) {
        return portfolioService.findById(no);
    }

    @PutMapping(path = {"/{no}"})
    public Portfolio update(@PathVariable("no") int no, @RequestBody Portfolio portfolio) {
        portfolio.setNo(no);
        return portfolioService.update(portfolio);
    }

    @DeleteMapping(path = {"/{no}"})
    public Portfolio delete(@PathVariable("no") int no) {
        return portfolioService.delete(no);
    }

    @GetMapping
    public List<Portfolio> findAll() {
        return portfolioService.findAll();
    }
}
