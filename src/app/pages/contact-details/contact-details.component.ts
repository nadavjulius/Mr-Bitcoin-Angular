import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { contactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact
  title: string = 'My Moves'
  moves: []
  maxCoins: number

  constructor(private userService: userService, private contactService: contactService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(
      res => {
        this.contactService.getContactById(res.id)
          .subscribe(
            res => this.contact = res,
            error => {
              console.log(error)
              this.router.navigate(['/'])
            })
      });
  }

  ngOnInit(): void {
    // this.loadContact()
    this.moves = this.userService.getMovesByContact(this.contact._id);
    this.maxCoins = this.userService.getMaxCoins();
  }

  get imgUrl() {
    return `https://robohash.org/${this.contact._id}?set=set2&size=180x180`
  }

  // loadContact() {
  //   let contactId = this.route.snapshot.paramMap.get('id')

  //   this.contactService.getContactById(contactId).subscribe((contact) => {
  //     this.contact = contact
  //   })
  // }

  backToContactPage() {
    this.router.navigate([`/contacts`])
  }

  openEditPage() {
    this.router.navigate([`/contacts/edit/${this.contact._id}`])
  }

  doTransfer(amount) {
    this.userService.addMove(this.contact, amount)
    this.moves = this.userService.getMovesByContact(this.contact._id)
  }
}
