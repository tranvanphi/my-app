import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Constant } from '../../ultil/constant';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private rootUrl = Constant.BASE_URL + 'appAPI/index.php/api/posts/';
  
  constructor(private http: HttpClient) { }

  getPosts(name:string, page:number,typeUser:number, typeSort:string){
    var data = "name="+name+"&page="+page+"&typeUser="+typeUser+"&typeSort="+typeSort;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'listPosts', data, {headers: reqHeader});
  }

  getPostsChild(id:number, page:number,typeUser:number, typeSort:string){
    var data = "id="+id+"&page="+page+"&typeUser="+typeUser+"&typeSort="+typeSort;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'listPostsChild', data, {headers: reqHeader});
  }

  getPostsDetail(id:number){
    var data = "id="+id;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'postDetail', data, {headers: reqHeader});
  }
  
}
