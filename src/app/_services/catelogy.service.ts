import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constant } from '../../ultil/constant';
import { Catelogy } from '../_models/catelogy.model';
@Injectable({
	providedIn: 'root'
})
export class CatelogyService {

	private rootUrl = Constant.BASE_URL + 'appAPI/index.php/api/Catolegy';

	constructor(private http: HttpClient) { }

	getAll() {
		return this.http.get<Catelogy[]>(this.rootUrl + '/findAll');
	}

	getCatelogyDetail(){
		return this.http.get(this.rootUrl + '/findAllDetalt');
	}
}
