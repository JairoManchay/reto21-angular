import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private http: HttpClient) { }

  // ruta del environment

  apiUser = environment.apiURL + 'users/';

  // metodo getAllUser()
  getAllUser(): Observable<string>{
    return this.http.get<string>(this.apiUser);
  }

}
