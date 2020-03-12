import { Component, OnInit } from '@angular/core';
import {Expense} from "../model/expense";
import {Category} from "../model/Category";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  expenses: Expense[] = [];
  categories : Category[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  this.getAllItems();
  }

  getAllItems() {
    this.apiService.getAllExpenses().subscribe(
      res => {
        this.expenses = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while getting the expense');
      }
    );

    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while getting the categories');
      }
    );
  }
}
