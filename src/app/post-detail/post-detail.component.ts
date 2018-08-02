import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-post-detail',
	templateUrl: './post-detail.component.html',
	styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

	constructor(
		private PostService: PostService,
		private route: ActivatedRoute,
		private router: Router) { }

	private detail: any = [];
	private Id: any = this.route.snapshot.paramMap.get('id');
	private flag:boolean = false;


	ngOnInit() {
		this.getPostsDetail();
	}


	getPostsDetail() {
		this.PostService.getPostsDetail(this.Id).subscribe(
			data => {
				this.detail = data;
				console.log(this.detail);
			},
			(error) => {
				console.log(error.error.message);
			}
		);
	}

	showPhone(){
		this.flag = true;
	}
}
