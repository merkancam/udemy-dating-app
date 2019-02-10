import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) {
  }

  ngOnInit() {
  }


  login() {
    this.authService.login(this.model).subscribe(res => {
      this.alertify.success('logged in successfully');
    }, error => {
      this.alertify.error('Failed to login');
    });
  }


  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }



}
