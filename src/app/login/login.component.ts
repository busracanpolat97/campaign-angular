import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {
    // this.router.ngOnDestroy();

    }


  login(): void {



    if (this.authService.login(this.username, this.password)) {
      console.log('Başarılı giriş!');
      this.toastr.success('Giriş başarılı', 'Giriş');
      this.router.navigate(['/list-campaigns']);
    } else {
      this.toastr.error('Hatalı kullanıcı adı ve şifre', 'Giriş');
      console.log('Hatalı kullanıcı adı veya şifre!');
    }
  }
}
