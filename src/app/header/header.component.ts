import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HeaderService } from '../_services/header.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	inforUser: any;
	constructor(
		private AuthenticationService: AuthenticationService,
		private HeaderService: HeaderService,
		private router: Router) { }

	ngOnInit() {
		this.showUser();
		
		HeaderService.subcribeChangeHead.subscribe((loginUser)=>{
			// console.log(loginUser);
			this.inforUser = loginUser;
		});
	}

	showUser() {
		this.AuthenticationService.getUserClaims().subscribe((data: any) => {
			this.inforUser = data;
		}, (err: HttpErrorResponse) => {
			this.inforUser = false;
			// console.log(this.inforUser);
		});
	}

	Logout() {
		HeaderService.subcribeChangeHead.next(false);
		this.AuthenticationService.logout();
		this.router.navigate(['/']);
	}
}
