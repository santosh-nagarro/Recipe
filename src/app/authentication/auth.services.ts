import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  api = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCY3CH8v85PNQK_XkTPQ39qy5-SR1NaGT4";
  constructor(private http: HttpClient) {

  }
  signUp(email: string, password: string) {
    this.http.get(this.api);
  }
}
