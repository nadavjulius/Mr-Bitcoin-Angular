import { Component, OnInit } from '@angular/core';
import { contactService } from '../../services/contact.service'
import { Contact } from '../../models/contact.model'
import { Router } from '@angular/router';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  
  constructor(private contactService: contactService, private router: Router) {
    this.contactService.loadContacts();

    this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];
    })
  }

  ngOnInit(): void {
  }

  onFilter(filterBy) {
    this.contactService.loadContacts(filterBy);

    this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];
    })
  }

  openEditPage() {
    this.router.navigate([`/contacts/edit`])
  }
}