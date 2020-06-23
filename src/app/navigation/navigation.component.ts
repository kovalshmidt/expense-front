import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  password: string;
  logStatus: boolean;
  roles: string[];

  constructor(private auth: AuthenticationService) {
  }

  ngOnInit(): void {
  this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    // Check that user is logged in
    this.logStatus = this.auth.isUserLoggedIn();
  }

  reloadPage() {
    window.location.reload();
  }

  login() {
    this.auth.authenticate(this.username, this.password).subscribe(
      res => {
        this.auth.setToken(res.jwt);
        this.roles = res.roles;
        this.isUserLoggedIn();
        this.reloadPage();
      },
      err => {
        console.log(err.error);
        alert('An error has occurred while authenticating the user');
      }
    );
  }

  logout() {
    this.auth.logOut();
    this.isUserLoggedIn();
    this.reloadPage();
  }

}
