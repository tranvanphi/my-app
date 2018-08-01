import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/user.model';
import { Constant } from '../../ultil/constant';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private rootUrl = Constant.BASE_URL + 'demoAPI/api/users';  
  
  getAll() {
    return this.http.get<User[]>(this.rootUrl+'/getAll');
  }
  

}
