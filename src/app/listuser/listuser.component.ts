import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from '../user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css'],
})
export class ListuserComponent implements OnInit {
  icon1 = faTrash;
  icon2 = faEdit;
  icon3 = faEye;
  Users!: User[];

  constructor(private UserSCRV: UserService) {}
  ngOnInit(): void {
    this.UserSCRV.getUsers().subscribe((Users) => {
      this.Users = Users;
    });
  }
  DeletUser(id: number) {
    this.Users = this.UserSCRV.deleteUser(id);
  }
}
