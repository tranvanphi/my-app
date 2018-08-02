import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-list-post-child',
	templateUrl: './list-post-child.component.html',
	styleUrls: ['./list-post-child.component.css']
})
export class ListPostChildComponent implements OnInit {
	constructor(
		private PostService: PostService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	private currentView: string = 'list';
	private page: number = 0;
	private totalPages: Array<number>;
	private ListPosts: Array<any>;
	private typeUser: any = 'all';
	private Id: any = this.route.snapshot.paramMap.get('id');

	private typeSort: string = 'date';

	ngOnInit() {
		this.getPosts();
	}

	getPosts() {
		this.PostService.getPostsChild(this.Id, this.page, this.typeUser, this.typeSort).subscribe(
			data => {
				this.ListPosts = data['result'];
				// console.log(this.ListPosts);
				this.totalPages = new Array(data['totalPage']);
			},
			(error) => {
				console.log(error.error.message);
			}
		);
	}

	setCurrentView(view) {
		this.currentView = view;
	}

	setPage(i, event: any) {
		event.preventDefault();
		this.page = i;
		this.getPosts();
	}

	getUserType(type) {
		this.typeUser = type;
		this.page = 0;
		this.getPosts();
	}

	getSort(type) {
		this.typeSort = type;
		// this.page = 0;
		this.getPosts();
	}

}
