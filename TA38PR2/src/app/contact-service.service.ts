import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private mails: any[] = [];

  constructor() { }

  addMail(newMail: any) {
    console.log(newMail);
    this.mails.push(newMail);
  }

  getMail() {
    return this.mails;
  }
}
