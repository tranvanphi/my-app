import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor(
		private AuthenticationService:AuthenticationService,
		private router:Router) { }

	ngOnInit() {
	}

	registerSubmit(register: NgForm) {
		var name = register.controls['name'].value;
		var user = register.controls['username'].value;
		var pass = register.controls['passwordGroup'].value.password;
		var email = register.controls['email'].value;

		this.AuthenticationService.register(user,pass,email,name).subscribe((data: any) =>{
			// localStorage.setItem('userToken',data.user_token);
			this.router.navigate(['/login']);
			// HeaderService.subcribeChangeHead.next(data);
		},(err:HttpErrorResponse)=>{
			console.log(err);
		});
	}
}
