package com.soon.hongsb.main;


import java.util.List;

public interface NavigationService {

    Navigation create(Navigation navigation);

    Navigation delete(int no);

    List<Navigation> findAll();

    Navigation findById(int no);

    Navigation update(Navigation navigation);
}
