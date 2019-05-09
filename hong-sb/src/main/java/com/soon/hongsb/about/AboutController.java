package com.soon.hongsb.about;


import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping({"/about"})
public class AboutController {

    @Autowired
    private AboutService aboutService;

    @PostMapping
    public About create(@RequestBody About about) {
        return aboutService.create(about);
    }

    @GetMapping(path = {"/{no}"})
    public About findOne(@PathVariable("no") int no) {
        return aboutService.findById(no);
    }

    @PutMapping(path = {"/{no}"})
    public About update(@PathVariable("no") int no, @RequestBody About about) {
        about.setNo(no);
        return aboutService.update(about);
    }

    @DeleteMapping(path = {"/{no}"})
    public About delete(@PathVariable("no") int no) {
        return aboutService.delete(no);
    }

    @GetMapping
    public List<About> findAll() {
        return aboutService.findAll();
    }
}
