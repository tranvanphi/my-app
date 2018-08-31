import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Constant } from '../../ultil/constant';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private rootUrl = Constant.BASE_URL + 'appAPI/index.php/api/Location';

	constructor(private http: HttpClient) { }


	getLocationDetail(){
		return this.http.get(this.rootUrl + '/findAllDetalt');
	}
}
