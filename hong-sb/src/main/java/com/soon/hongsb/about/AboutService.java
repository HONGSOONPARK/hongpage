package com.soon.hongsb.about;

import java.util.List;

public interface AboutService {

    About create(About about);

    About delete(int no);

    List<About> findAll();

    About findById(int no);

    About update(About about);
}
