import { Injectable } from '@angular/core';
import { Auto } from './auto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  formData: Auto;
  options: any;
  list: any;
  Option: any;
  constructor(private http: HttpClient, private authService: AuthService) {
    const authToken = this.authService.getToken();
    this.options = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        Authorization: 'Bearer ' + authToken,
      }),
    };
  }

  readonly rootURL = environment.apiUrl;
  postAuto(formData: Auto) {
    return this.http.post(this.rootURL + 'auto', formData, this.options);
  }

  putAuto(formData: Auto) {
    return this.http.put(
      this.rootURL + 'auto/' + formData.id,
      formData,
      this.options
    );
  }
  deleteAuto(id: number) {
    return this.http.delete(this.rootURL + 'auto/' + id, this.options);
  }
  refreshList() {
    this.http
      .get(this.rootURL + 'auto', this.options)
      .toPromise()
      .then((res) => ((this.list = res), console.log(res)));
  }
  getMarcaList() {
    this.http
      .get(this.rootURL + 'marca', this.options)
      .toPromise()
      .then((res) => ((this.Option = res), console.log(res)));
  }
}
