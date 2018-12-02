import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/services/user/users.service';
import { UserListComponent } from '../userlist/userlist.component';
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
  updateUser() {
    this.userService.updateUser(this.user.userId,this.user)
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
          this.listComponent.loadAllData();
        },
        error => console.log(error));
  }
}
