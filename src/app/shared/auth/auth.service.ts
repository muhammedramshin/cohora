import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJQMDdabnAxIiwiVUlEIjoiUDA3Wm5wMSIsIm5iZiI6MTY0Njc0Njg4Mywicm9sZXMiOlsiQ09IT1JBX0FETUlOIiwiVEVOQU5UX0FETUlOIl0sImlzcyI6ImNvaG9yYSIsIm5pY2tuYW1lIjoiRGVtbyIsImV4cCI6MTY0Njc1MDQ4MywiaWF0IjoxNjQ2NzQ2ODgzLCJUSUQiOiJUMDYyb2IxIn0.uWsLHDkQloOa3l55pK-1-eOOnfyHa2CWBIUO-dW6-Y8';


  constructor() { }

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
  }

  logout() {

    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
}
