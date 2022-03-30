import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { QuestionComponent } from './components/question/question.component';
import {SignupComponent } from './components/signup/signup.component'
const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'question',
    component:QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
