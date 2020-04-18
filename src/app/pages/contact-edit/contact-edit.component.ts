import { Component, OnInit, ViewChild } from '@angular/core';
import { contactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact;
  @ViewChild('form') form: NgForm

  constructor(private contactService: contactService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      res => {
        if (res.id) {
          this.contactService.getContactById(res.id).subscribe(
            res => this.contact = res,
            error => {
              console.log(error)
              this.router.navigate(['/'])
            }
          )
        }
      });
  }

  ngOnInit(): void {
    if (this.contact) {
      setTimeout(() => {
        this.form.setValue({ name: this.contact.name, email: this.contact.email, phone: this.contact.phone })
      });
    }
  }

  onSubmit() {
    if (!this.contact) {
      this.contact = {
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone
      }
    } else {
      this.contact.name = this.form.value.name
      this.contact.email = this.form.value.email
      this.contact.phone = this.form.value.phone
    }
    this.contactService.saveContact(this.contact)
    this.router.navigate([`/contacts`])
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact._id)
    this.router.navigate([`/contacts`])
  }

  backToContactPage() {
    this.router.navigate([`/contacts`])
  }

}

