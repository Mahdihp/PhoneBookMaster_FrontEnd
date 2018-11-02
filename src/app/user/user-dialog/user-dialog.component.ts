import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {User} from '../../model/User';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  form: FormGroup;
  userId: string;
  username: string;
  password: string;
  displayname: string;
  // user: User;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {userId, username, password, displayname}: User) {

    // console.log("logg "+ this.user.username);
    this.userId = userId;
    this.username = username;
    this.password = password;
    this.displayname = displayname;


    this.form = fb.group({
      userId: [userId, Validators.required],
      username: [username, Validators.required],
      password: [password, Validators.required],
      displayname: [displayname, Validators.required]
      // user: [user, Validators.required],
      // category: ["categort", Validators.required],
      // releasedAt: [moment(), Validators.required],
      // longDescription: ["description", Validators.required]
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
