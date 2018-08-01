import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './_guards/auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListCatelogComponent } from './list-catelog/list-catelog.component';
import { ListPostComponent } from './list-post/list-post.component';


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
		//, canActivate: [AuthGuard]
	},
	{
		path: 'catalog_detalt/:id',
		component: ListPostComponent
	},
	{
		path: 'catalog_detalt_child/:name',
		component: ListPostComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }