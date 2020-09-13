import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}
  title = 'ngMarcas';

  logOut() {
    this.authService.doLogout();
    this.router.navigateByUrl('/login');
  }
  isActive() {
    return this.authService.isLoggedIn;
  }
}
