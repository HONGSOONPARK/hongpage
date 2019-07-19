import { element } from 'protractor';
import { About } from '../../../models/about.model';
import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../../../models/contact.model';
import { ContactService } from './contact.service';

import { Validators, FormGroup, FormControl, FormBuilder} from '@angular/forms';
// import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  // color = 'primary';
  // mode = 'indeterminate';
  // value = 50;

  contacts: Contact = new Contact();
  constructor(private router: Router, private contactService: ContactService) {
  }


  mailForm = new FormGroup({
    // amount: new FormControl('', [ Validators.required, Validators.pattern(/^\d+$/).call(this.hyphenAdd) ]),
    // tel: new FormControl('', [ Validators.required, Validators.pattern(/^\d{2,4}-\d{3,4}-\d{0,4}$/)]),
    // tel: new FormControl('', [ Validators.required, Validators.pattern(/^\d{2,4}(\-?)\d{3,4}(\-?)\d{0,4}$/)]),
    name: new FormControl('', [ Validators.required ]),
    corp: new FormControl('', [ Validators.required ]),
    title: new FormControl('', [ Validators.required ]),
    tel: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    contents: new FormControl('', [ Validators.required ]),
    });


  createContact(): void {

    this.contacts.name = this.mailForm.get('name').value;
    this.contacts.corp = this.mailForm.get('corp').value;
    this.contacts.title = this.mailForm.get('title').value;
    this.contacts.tel = this.mailForm.get('tel').value;
    this.contacts.email = this.mailForm.get('email').value;
    this.contacts.contents = this.mailForm.get('contents').value;

    this.contactService.createContact(this.contacts)

        .subscribe( data => {
          alert('관심을 가져주셔서 감사합니다.\n빠른 시일내에 답장드리겠습니다.');
        });
  }

  hyphenAdd(event: any): void {
      // this.contacts.tel = '';

  }


}

