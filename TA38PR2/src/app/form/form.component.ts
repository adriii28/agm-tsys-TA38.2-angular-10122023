import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  myForm: FormGroup;
  contactService: ContactServiceService;

  constructor(private formBuilder: FormBuilder, private service: ContactServiceService) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      mail: ['', Validators.required],
      msg: ['', Validators.required],
      spam: ['', Validators.required],
    });
    this.contactService = service;
  }

  onSubmit() : void {
    const emailData = this.myForm.value;  
    this.service.addMail(emailData);
    this.myForm.reset();
  }

}
