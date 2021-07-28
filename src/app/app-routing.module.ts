import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EmppageComponent } from './components/emppage/emppage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  {
     path: "login",
     component:LoginComponent,
     pathMatch: "full"

  },

  {
     path: '',
     component:HomepageComponent,
     pathMatch: "full"

  },
 
  {
    path: "emppage",
    component:EmppageComponent,
    pathMatch: "full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
