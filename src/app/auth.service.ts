import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _Url = environment.apiUrl;

  options: any;
  respuesta: any;
  error: any;
  constructor(private http: HttpClient) {
    console.log(environment.apiUrl);
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
  }
  registroUsuario(user) {
    //return this.http.post(this._registrUrl, user, httpOptions);
    return this.http.post(this._Url + 'users', user, this.options);
  }
  login(user) {
    this.respuesta = this.http
      .post<any>(this._Url + 'login', user)
      .pipe(catchError(this.handleError));

    return this.respuesta;
  }

  handleError(error: HttpErrorResponse) {
    this.error = error.error;
    return throwError(error);
  }
  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');

    if (removeToken == null) {
    }
  }
}
