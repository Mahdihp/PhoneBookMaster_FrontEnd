import {Component, OnInit} from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {UserData} from 'src/app/model/UserData';
import {User} from '../../model/User';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';
import {stringify} from 'querystring';


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

  opendialog({userId, username, password, displayname}: User) {
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
  saveUser(user:User){
    console.log('afterClosed saveUser' + JSON.stringify(user));
  }
}

