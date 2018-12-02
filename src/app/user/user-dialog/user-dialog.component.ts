import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../model/User';
import {Role} from '../../model/Role';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {

  form: FormGroup;
  userId: string;
  username: string;
  password: string;
  displayname: string;

  // panelColor ;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {userId, username, password, displayname}: User) {

    this.userId = userId;
    this.username = username;
    this.password = password;
    this.displayname = displayname;

   // this.panelColor = new FormControl();
   // console.log(this.panelColor);

    this.form = fb.group({
      userId: [userId, Validators.required],
      username: [username, Validators.required],
      password: [password, Validators.required],
      displayname: [displayname, Validators.required]
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
