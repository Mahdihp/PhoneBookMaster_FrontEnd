import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UserListComponent } from '../userlist/userlist.component';
import { from } from 'rxjs';
import { User } from 'src/app/model/User';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UsersService, private listComponent: UserListComponent) { }

  ngOnInit() {
  }
  updateUser(n) {
    this.userService.updateUser(this.user.userId,
      {
        username: this.user.username, password: this.user.password,
        displayname: this.user.displayname
      })
      .subscribe(
        data => {
          console.log(data);
          this.user = data.dataList[0];
        },
        error => console.log(error));
  }
  deleteUser() {
    this.userService.deleteUser(this.user.userId)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
