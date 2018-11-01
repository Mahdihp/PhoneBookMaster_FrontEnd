import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { UserData } from 'src/app/model/UserData';
import { stringify } from 'querystring';
import { SerializationHelper } from '../../util/SerializationHelper';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {
  users: UserData;
  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.reloadData();
  }
  // deleteCustomers() {
  //   this.userService.deleteAll()
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.reloadData();
  //       },
  //       error => console.log('ERROR: ' + error));
  // }

  reloadData() {
    this.userService.getUserList()
    .subscribe(
      resp => {
        // console.log(resp.body.message);
        console.log(this.users);
        this.users = resp.body;
      }
    );

  }
  
}
