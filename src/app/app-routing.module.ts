import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { Cat1Component } from './cat1/cat1.component';
import { Cat2Component } from './cat2/cat2.component';
import { Cat3Component } from './cat3/cat3.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'register', component: RegistrationComponent
  },
  {
    path: '', component: AppComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  
  {
    path: 'home', component: HomeComponent
  },
  {
    path: "cat1", component: Cat1Component
  },
  {
    path: 'cat2', component: Cat2Component
  },
  {
    path: 'cat3', component: Cat3Component
  },
  {
    path:'one', component: OneComponent
  },
  
  {
    path:'two', component: TwoComponent
  },
  {
    path:'three', component: ThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
