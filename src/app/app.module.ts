import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryComponent } from './category/category.component'
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const appRoutes :Routes = [
  {
    path:'expense',
    component:ExpenseComponent
  },
  {
    path:'categories',
    component:CategoryComponent
  },
  {
    path:'',
    component:ExpenseComponent,
    pathMatch:'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExpenseComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
