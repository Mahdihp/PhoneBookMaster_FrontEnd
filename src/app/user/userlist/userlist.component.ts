import {Component, Inject, OnInit} from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {UserData} from 'src/app/model/UserData';
import {User} from '../../model/User';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'username', 'password', 'displayname', 'update', 'delete'];

  users: UserData;
  dataSource: User[];

  constructor(private userService: UsersService,public dialog: MatDialog ) {
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

}

