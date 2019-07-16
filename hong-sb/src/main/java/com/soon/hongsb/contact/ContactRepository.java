package com.soon.hongsb.contact;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ContactRepository extends Repository<Contact, Integer> {
    Contact save(Contact contact);
}
