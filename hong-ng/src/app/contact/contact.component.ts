import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {

  contacts: Contact = new Contact();
  constructor(private router: Router, private contactService: ContactService) {
  }

  createContact(): void {
    this.contactService.createContact(this.contacts)
        .subscribe( data => {
          alert('관심을 가져주셔서 감사합니다. 빠른 시일내에 답장드리겠습니다.');
        });
  }


}


