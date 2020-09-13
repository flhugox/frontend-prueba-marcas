import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};
  loginError: any = {};
  errorLogin: boolean = false;
  constructor(
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  loginUser() {
    this._auth.login(this.loginUserData).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token);
        this.toastr.success('Acceso Correcto', 'Login');
        this.router.navigateByUrl('/autos');
      },
      (error) => {
        //Error callback

        this.errorLogin = true;
        this.toastr.error('Usuario o Contraseña Incorrecta', 'Login');
        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }
}
