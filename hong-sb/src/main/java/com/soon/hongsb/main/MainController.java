package com.soon.hongsb.main;

import com.soon.hongsb.about.About;
import com.soon.hongsb.about.AboutService;
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
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping({"/"})
public class MainController {

    @Autowired
    private NavigationService navigationService;

//    @GetMapping
//    public ModelAndView initList() {
//
//        ModelAndView mv = new ModelAndView();
//        List<Experience> about = aboutService.findAll();
//        List<Navigation> navigation = navigationService.findAll();
//
//        mv.addObject("about",about);
//        mv.addObject("navigation",navigation);
//        return mv ;
//    }

    @GetMapping(path = {"/navigation"})
    public List<Navigation> findNavigation() {
        return navigationService.findAll(); }
}
