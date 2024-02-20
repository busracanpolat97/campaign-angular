import {Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
    this.toastr.success('Sistemden çıkış yapıldı', 'Çıkış');
    this.router.navigate(['/login']);
  }
}
