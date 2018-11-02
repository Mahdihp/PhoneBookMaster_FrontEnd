import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserData } from 'src/app/model/UserData';
import { User } from '../../model/User';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { stringify } from 'querystring';
import { MessageBoxComponent } from 'src/app/message-box/message-box.component';
import { MessageDialog } from 'src/app/model/MessageDialog';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'username', 'password', 'displayname', 'update', 'delete'];

  users: UserData;
  dataSource: User[];

  constructor(private userService: UsersService, private dialog: MatDialog) {
  }


  ngOnInit() {

    this.reloadData();
  }


  reloadData() {
    this.userService.getUserList()
      .subscribe(
        resp => {
          this.users = resp.body;
          this.dataSource = this.users.dataList;
        }
      );
  }
  openMessageBox({ userId }: MessageDialog) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    console.log(userId);
    dialogConfig.data = {
      userId
    };
    const dialogRef = this.dialog.open(MessageBoxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      val => {
        console.log(val);
      }
    );
  }
  showUpdateDialog({ userId, username, password, displayname }: User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 500;

    dialogConfig.data = {
      userId, username, password, displayname
    };
    // this.data = {userId, username, password, displayname};
    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {
        if (val != null) {
          this.saveUser(val)
        }
      }
    );

  }
  saveUser(user: User) {
    console.log('afterClosed saveUser' + JSON.stringify(user));
  }
}

