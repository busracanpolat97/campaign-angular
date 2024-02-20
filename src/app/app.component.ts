import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {

    this.router.events.subscribe(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      if (!this.isLoggedIn && !this.router.url.includes('login')) {
      }
    });
  }
}
