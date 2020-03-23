import { Component, OnInit } from '@angular/core';
import {User} from '../model/user';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  user: User = {
    name: null,
    id: null,
    email: null
  };

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.apiService.getAllUsers().subscribe(
      res => {
        this.users = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while getting the users');
      }
    );
  }

  userDelete(user: User) {
    if (confirm('Are you sure you want delete this expense?')) {
      this.apiService.deleteUser(user.id).subscribe(
        res => {
          const indexOfExpense = this.users.indexOf(user);
          this.users.splice(indexOfExpense, 1);
        },
        err => {
          console.log(err.toString());
          alert('An error has occurred while deleting the expense');
        }
      );
    }
  }

  saveUser(user: User) {
    this.apiService.saveUser(user).subscribe(
      res => {
        this.users.push(res);
        console.log('user was added');
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while saving the user');
      }
    );
  }

  // For the future issue)))
  // if you read this you might have to do editable table
  // Good luck

  updateUser(user: User) {
    this.apiService.updateUser(user).subscribe(
      res => {
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while updating the user');
      }
    );
  }
}
