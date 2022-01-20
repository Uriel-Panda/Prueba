import { Injectable } from '@angular/core';
import { loginInt } from '../models/login.interface';
import { RespLoginModelInt } from '../models/response.interface';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url = "https://dev.api.ifscore.biz"

  constructor(private http:HttpClient) { }

  login(form:loginInt): Observable<RespLoginModelInt>{
    let direction = this._url + "/expediente/auth/2.1.0/multiplica/app/login/86bcfd2b-aea8-4132-8977-51ba091fdc74"
    return this.http.post<RespLoginModelInt>(direction,form);
  }

}
