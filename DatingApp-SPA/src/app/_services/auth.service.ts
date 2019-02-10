import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  constructor(private http: HttpClient) {

  }



  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(map((response: any) => {
      if (response) {
        localStorage.setItem('token', response.token);
        this.decodedToken = this.jwtHelper.decodeToken(response.token);
        console.log(this.decodedToken);
      }
    }));

  }


  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

}
