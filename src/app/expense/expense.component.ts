import {Component, OnInit} from '@angular/core';
import {Expense} from '../model/expense';
import {ApiService} from '../shared/api.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses: Expense[] = [];
  expense: Expense;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllExpenses();
  }

  getAllExpenses() {
    this.apiService.getAllExpenses().subscribe(
      res => {
        this.expenses = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while getting the expense');
      }
    );
  }

  getExpenseById(expense: Expense) {
    this.apiService.getExpenseById(expense.id).subscribe(
      res => {
        this.expense = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while getting the expense by id');
      }
    );
  }

  updateExpense(updateExpense: Expense) {
    this.apiService.updateExpense(updateExpense).subscribe(
      res => {
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while updating the expense');
      }
    );
  }

  deleteExpense(expense: Expense) {
    if (confirm('Are you sure you want delete this expense?')) {
      this.apiService.deleteExpense(expense.id).subscribe(
        res => {
          const indexOfExpense = this.expenses.indexOf(expense);
          this.expenses.splice(indexOfExpense, 1);
        },
        err => {
          console.log(err.toString());
          alert('An error has occurred while deleting the expense');
        }
      );
    }
  }

  saveExpense(saveExpense: Expense) {
    this.apiService.saveExpense(saveExpense).subscribe(
      res => {
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while saving the expense');
      }
    );
  }

}
