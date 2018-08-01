import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ListCatelogComponent } from './list-catelog/list-catelog.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ConfirmEqualValidatorDirective } from './_directive/confirm-equal-validator.directive';
import { ListPostComponent } from './list-post/list-post.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ListPostChildComponent } from './list-post-child/list-post-child.component';
import { PostDetailComponent } from './post-detail/post-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    ListCatelogComponent,
    SidebarMenuComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ConfirmEqualValidatorDirective,
    ListPostComponent,
    GridViewComponent,
    ListViewComponent,
    ListPostChildComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
