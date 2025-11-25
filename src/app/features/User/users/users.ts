import {Component, inject, OnInit, signal} from '@angular/core';
import {DashboardLayout} from '../../../core/layouts/dashboard-layout/dashboard-layout';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {UserService} from '../../../core/services/user-service';
import {UserModel} from '../../../core/models/User.model';
import {ProfilePicService} from '../../../core/services/profilepic-service';

@Component({
  selector: 'app-users',
  imports: [
    DashboardLayout,
    TableModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './users.html',
})
export class Users implements OnInit {
  private userService = inject(UserService);
  protected profilePicService = inject(ProfilePicService);

  users = signal<UserModel[]>([]);

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    return this.userService.getUsers().subscribe({
      next: usersList => {
        this.users.set(usersList.data);
        console.log(this.users);
      },
      error: error => {
        console.log(error);
      }
    });
  }



}
