import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { HeaderService } from '../_services/header.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	isLoginError: boolean = false;
	constructor(
		private AuthenticationService: AuthenticationService,
		private router: Router
	) { }

	ngOnInit() { 
		this.AuthenticationService.logout();
	}

	onFormSubmit(userForm: NgForm) {
		// console.log(userForm);return;
		var user = userForm.controls['username'].value;
		var pass = userForm.controls['password'].value;

		this.AuthenticationService.login(user, pass).subscribe((data: any) => {
			// console.log(data);
			localStorage.setItem('currentUser', JSON.stringify({ token: data.user_token }));
			this.router.navigate(['/']);
			HeaderService.subcribeChangeHead.next(data);
		}, (err: HttpErrorResponse) => {
			this.isLoginError = true;
		});
	}

}
