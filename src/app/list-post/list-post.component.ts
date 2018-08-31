import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-post',
	templateUrl: './list-post.component.html',
	styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

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
	private Name: any = this.route.snapshot.paramMap.get('name');
	private typeSort:string = 'date';

	ngOnInit() {
		this.getPosts();
	}

	getPosts() {
		// getPosts(name:string, page:number,typeUser:number, typeSort:string)
		this.PostService.getPosts(this.Name, this.page, this.typeUser,this.typeSort).subscribe(
			data => {
				this.ListPosts = data['result'];
				console.log(this.ListPosts);
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

	getSort(type){
		this.typeSort = type;
		// this.page = 0;
		this.getPosts();
	}

	
}
