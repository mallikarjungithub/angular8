import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"Technologies",
    component:TechnologiesComponent
  },
  {
    path:"SignIn",
    component:SignInComponent
  },
  {
    path:"SignUp",
    component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
