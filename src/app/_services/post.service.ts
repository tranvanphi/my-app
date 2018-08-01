import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Constant } from '../../ultil/constant';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private rootUrl = Constant.BASE_URL + 'appAPI/index.php/api/posts/';
  
  constructor(private http: HttpClient) { }

  getPosts(name:string, page:number,typeUser:string){
    // console.log(name);
    // getPosts(name:string, page:number,typeUser:number, typeSort:number){
    var data = "name="+name+"&page="+page+"&typeUser="+typeUser;
    // var data = "name="+name+"&page="+page+"&typeUser="+typeUser+"&typeSort="+typeSort;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'listPosts', data, {headers: reqHeader});
  }

  
}
