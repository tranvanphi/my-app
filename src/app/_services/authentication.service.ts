import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Constant } from '../../ultil/constant';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    // private rootUrl:string = Constant.BASE_URL + 'demoAPI/api/users';
    private rootUrl: string = Constant.BASE_URL + 'appAPI/index.php/api/user';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        var data = "username=" + username + "&password=" + password;
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'No-Auth': 'TRUE' });
        return this.http.post<any>(this.rootUrl + '/login', data, { headers: reqHeader })
            // .pipe(map((res: any) => {
            //     // login successful if there's a jwt token in the response
            //     if (res && res.user_token) {
            //         // store username and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify({ token: res.user_token }));
            //     }
            // }));
    }

    register(username, password, email, name) {
        var data = "username=" + username + "&password=" + password + "&email=" + email + "&name=" + name;
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });
        return this.http.post(this.rootUrl + '/register', data, { headers: reqHeader });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getUserClaims() {
        var headers = new HttpHeaders({ 'Authorization': 'Bearer ' });
        if (localStorage.getItem('userToken')) {
            var headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('userToken') });
        }
        return this.http.get(this.rootUrl + '/checkuser', { headers: headers });
    }
}
