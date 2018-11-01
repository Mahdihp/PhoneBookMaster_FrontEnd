import {Component, OnInit, TemplateRef} from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {UserData} from 'src/app/model/UserData';

export interface PeriodicElement {
  userId: string;
  username: number;
  password: number;
  displayname: string;
}

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})


export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['userId', 'username', 'password', 'displayname','update','delete'];

  users: UserData;
  dataSource ;
  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.reloadData();
  }


  reloadData() {
    this.userService.getUserList()
      .subscribe(
        resp => {
          // console.log(resp.body.message);
          // console.log(this.users.message);
          this.users = resp.body;
          this.dataSource = this.users.dataList;
        }
      );
  }


}
