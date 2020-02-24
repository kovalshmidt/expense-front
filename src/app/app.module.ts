import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ExpenseComponent } from './expense/expense.component';
import { CategoryComponent } from './category/category.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'expense',
    component: ExpenseComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExpenseComponent,
    CategoryComponent,
    HomeComponent,
    FooterComponent
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
