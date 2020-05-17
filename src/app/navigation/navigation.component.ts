import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  password: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.authenticate(this.username, this.password).subscribe(
      res => {
        this.auth.setToken(res.jwt);
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while authenticating the user');
      }
    );
  }

  logout() {
    this.auth.logOut();
  }

}
