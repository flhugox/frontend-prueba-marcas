import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  registerUserData: any = {};
  constructor(
    private _auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  registerUser() {
    this._auth.registroUsuario(this.registerUserData).subscribe(
      (res: any) => {
        localStorage.setItem('access_token', res.token);
        this.toastr.error('Se Registro Correctamente', 'Login');
        this.router.navigateByUrl('/autos');
      },
      (error) => {
        //Error callback
        console.log(error.error);
        this.toastr.error('Datos Incorrectos', 'Registro');
        //throw error;   //You can also throw the error to a global error handler
      }
    );
  }
}
