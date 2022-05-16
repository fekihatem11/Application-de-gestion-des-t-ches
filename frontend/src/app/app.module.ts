import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './task/task.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import {TaskService} from "./services/task.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./services/auth-guard.service";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home/:id', canActivate: [AuthGuard] ,component: HomeComponent },
  { path: 'task' ,component: TaskComponent },




];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TaskComponent,
    ViewTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    TaskService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
