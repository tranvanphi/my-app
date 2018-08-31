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

  addPosts(idUser:number, title:string,price:number,catalog:number,location:number,image_list:any,content:string){
    var data="iduser="+idUser+"&title="+title+"&price="+price+"&catalog="+catalog+"&location="+location+"&image_list="+image_list+"&content="+content;
    console.log(data);
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'addPosts',data,{headers: reqHeader});
  }

  //======================================================
  postFile(formData){
    let url:string = 'http://localhost/appAPI/index.php/api/posts/uploads';
    var reqHeader = new HttpHeaders({ 'Content-Type': 'multipart/form-data'});
    // console.log(formData);
    return this.http.post(url, formData,{headers: reqHeader});
  }

  removeFile(filename:string){
    var data="filename="+filename;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'});
    return this.http.post(this.rootUrl + 'removeFile',data,{headers: reqHeader});
  }
}
