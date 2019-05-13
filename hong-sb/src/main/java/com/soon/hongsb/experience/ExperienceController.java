package com.soon.hongsb.experience;


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
@RequestMapping({"/experience"})
public class ExperienceController {

    @Autowired
    private ExperienceService experienceService;

    @PostMapping
    public Experience create(@RequestBody Experience experience) {
        return experienceService.create(experience);
    }

    @GetMapping(path = {"/{no}"})
    public Experience findOne(@PathVariable("no") int no) {
        return experienceService.findById(no);
    }

    @PutMapping(path = {"/{no}"})
    public Experience update(@PathVariable("no") int no, @RequestBody Experience experience) {
        experience.setNo(no);
        return experienceService.update(experience);
    }

    @DeleteMapping(path = {"/{no}"})
    public Experience delete(@PathVariable("no") int no) {
        return experienceService.delete(no);
    }

    @GetMapping
    public List<Experience> findAll(Sort sort) {
        return experienceService.findAll(sort);
    }
}
