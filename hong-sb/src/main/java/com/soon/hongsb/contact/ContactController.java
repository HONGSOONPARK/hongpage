package com.soon.hongsb.contact;



import com.soon.hongsb.mail.MailService;
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
@RequestMapping({"/contact"})
public class ContactController {

    @Autowired
    private ContactService contactService;

    @Autowired
    private MailService mailService;

    @PostMapping
    public Contact create(@RequestBody Contact contact) {

        String result = "";
        String msg = "<html><head></head><body>";

        msg += "<div style='white-space:pre-line'>";
        msg += "<p>보낸사람 :"+contact.getName()+"</p>";
        msg += "<p>회사 :"+contact.getCorp()+"</p>";
        msg += "<p>이메일 :"+contact.getEmail()+"</p>";
        msg += "<p>연락처 :"+contact.getTel()+"</p>";
        msg += "<p>내용</p>";
        msg += "<p>"+contact.getContents()+"</p>";
        msg += "</div>";
        msg += "</body></html>";

        boolean mailCheck = mailService.sendMail("phs39@naver.com", contact.getTitle(), msg);

        contactService.create(contact);


        return contactService.create(contact);
    }

}

