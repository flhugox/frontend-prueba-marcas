import { Injectable } from '@angular/core';
import { Marca } from './marca.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  formData: Marca;
  options: any;
  list: any;
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
  postMarca(formData: Marca) {
    return this.http.post(this.rootURL + 'marca', formData, this.options);
  }

  putMarca(formData: Marca) {
    return this.http.put(
      this.rootURL + 'marca/' + formData.id,
      formData,
      this.options
    );
  }
  deleteMarca(id: number) {
    return this.http.delete(this.rootURL + 'marca/' + id, this.options);
  }
  refreshList() {
    this.http
      .get(this.rootURL + 'marca', this.options)
      .toPromise()
      .then((res) => ((this.list = res), console.log(res)));
  }
}
