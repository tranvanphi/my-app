import { Component, OnInit, ElementRef } from '@angular/core';
import { PostService } from '../_services/post.service';
import { NgForm } from '@angular/forms';
import { FileHolder } from 'angular2-image-upload';
import { LocationService } from '../_services/location.service';
import { CatelogyService } from '../_services/catelogy.service';
import { AuthenticationService } from '../_services/authentication.service';

import { Observable, Subject } from 'rxjs';

import * as _ from 'lodash';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	constructor(
		private AuthenticationService: AuthenticationService,
		private LocationService: LocationService,
		private CatelogyService: CatelogyService,
		private PostService: PostService
	) { }

	private idUser: any;
	public originData: any = [];
	public data: any = [];
	public originLocation: any = [];
	public dataLocation: any = [];
	private arrayList: any = [];

	ngOnInit() {
		this.showUser();
		this.getCatalog();
		this.getLocation();
	}

	showUser() {
		this.AuthenticationService.getUserClaims().subscribe((data: any) => {
			this.idUser = data.id;
		}, (err: HttpErrorResponse) => {
			console.log(err);
		});
	}

	onUploadFinished(file: FileHolder) {
		// console.log(file);
		var temp = file.serverResponse.response._body;
		var start = temp.search('"namefile":"');
		var end = temp.search('"}');
		var res = temp.substring(start+12, end);
		this.arrayList.push(res);
	}

	onRemoved(file: FileHolder){
		var atemp = file.serverResponse.response._body;
		var start = atemp.search('"namefile":"');
		var end = atemp.search('"}');
		var fileName = atemp.substring(start+12, end);
		console.log(fileName);
		var index = this.arrayList.indexOf(fileName);
		if (index > -1) {
			this.arrayList.splice(index, 1);
		}
		console.log(this.arrayList);
		this.PostService.removeFile(fileName).subscribe(data=>{console.log(data)})
	}

	getCatalog() {
		this.CatelogyService.getCatelogyDetail().subscribe(res => {
			this.originData = res;
			this.data = _.groupBy(res, 'id_group');
			// console.log(this.data);
		});
	}

	getLocation() {
		this.LocationService.getLocationDetail().subscribe(data => {
			this.originLocation = data;
			this.dataLocation = _.groupBy(data, 'provinceId');
			// console.log(this.dataLocation);
		});
	}

	getKeys(data) {
		return _.keys(data);
	}

	getGroupName(groupId) {
		let item = _.find(this.originData, { id_group: groupId });
		return _.capitalize(item.namegroup);
	}

	getAliasName(groupId) {
		let item = _.find(this.originData, { id_group: groupId });
		return _.capitalize(item.alias_name);
	}

	getProviceName(groupId) {
		let item = _.find(this.originLocation, { provinceId: groupId });
		return _.capitalize(item.provinceName);
	}

	newPostSubmit(postsForm: NgForm) {
		// console.log(postsForm);
		
		var title = postsForm.controls['title'].value;
		var price = postsForm.controls['price'].value;
		var catalog = postsForm.controls['catalog'].value;
		var location = postsForm.controls['location'].value;
		var content = postsForm.controls['content'].value;
		this.PostService.addPosts(this.idUser, title, price, catalog, location, this.arrayList, content).subscribe(
			(data: any) => {
				console.log(data);
			}, (error) => {
				console.log(error.error.message);
			}
		);
	}
}
