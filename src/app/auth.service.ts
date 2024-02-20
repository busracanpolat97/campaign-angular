import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123456') {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }
}
