import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Contact} from '../../model/Contact';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  form: FormGroup;
  contactId: string;
  firstName: string;
  lastName: string;
  homePhone: string;
  mobile: string;
  email: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {contactId, firstName, lastName, homePhone, mobile, email}: Contact) {

    this.contactId = contactId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.homePhone = homePhone;
    this.mobile = mobile;
    this.email = email;

    // this.panelColor = new FormControl();
    // console.log(this.panelColor);

    this.form = fb.group({
      contactId: [contactId, Validators.required],
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      homePhone: [homePhone, Validators.required],
      mobile: [mobile, Validators.required],
      email: [email, Validators.required]
      // panelColor: [this.panelColor, Validators.required]

    });
  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
