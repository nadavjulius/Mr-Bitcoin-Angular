import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;

  get imgUrl() {
    return `https://robohash.org/${this.contact._id}?set=set2&size=180x180`
  }


  constructor() { }

  ngOnInit(): void {
  }

}
