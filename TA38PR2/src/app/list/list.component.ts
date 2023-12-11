import { Component } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  mails: any[] = [];

  constructor(private contactService: ContactServiceService) {
    this.mails = this.contactService.getMail();
  }
}
