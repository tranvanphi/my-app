import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCatelogComponent } from './list-catelog/list-catelog.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ListPostChildComponent } from './list-post-child/list-post-child.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';


const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: '',
		component: ListCatelogComponent
		
	},
	{
		path: 'catalog_detalt/:name',
		component: ListPostComponent
	},
	{
		path: 'catalog_detalt_child/:id',
		component: ListPostChildComponent
	},
	{
		path: 'post_detail/:id',
		component: PostDetailComponent
	},{
		path: 'new_post',
		component:NewPostComponent,
		canActivate: [AuthGuard]
	}
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }