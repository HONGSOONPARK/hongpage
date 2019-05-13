package com.soon.hongsb.skill;


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
@RequestMapping({"/skill"})
public class SkillController {

    @Autowired
    private SkillService skillService;

    @PostMapping
    public Skill create(@RequestBody Skill skill) {
        return skillService.create(skill);
    }

    @GetMapping(path = {"/{no}"})
    public Skill findOne(@PathVariable("no") int no) {
        return skillService.findById(no);
    }

    @PutMapping(path = {"/{no}"})
    public Skill update(@PathVariable("no") int no, @RequestBody Skill skill) {
        skill.setNo(no);
        return skillService.update(skill);
    }

    @DeleteMapping(path = {"/{no}"})
    public Skill delete(@PathVariable("no") int no) {
        return skillService.delete(no);
    }

    @GetMapping
    public List<Skill> findAll(Sort sort) {
        return skillService.findAll(sort);
    }
}
