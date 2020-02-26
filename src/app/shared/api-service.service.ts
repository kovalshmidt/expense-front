import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private BASE_URL = `http://localhost:8080` + `//api`;
  // Expense
  private GET_ALL_EXPENSES_URL = `${this.BASE_URL}//expenses`;
  private GET_EXPENSE_BY_ID = `${this.BASE_URL}//expense//`;
  private POST_EXPENSE_URL = `${this.BASE_URL}//expense`;
  private PUT_EXPENSE_URL = `${this.BASE_URL}//expense//`;
  private DELETE_EXPENSE_URL = `${this.BASE_URL}//expense//`;
  // Category
  private GET_ALL_CATEGORIES_URL = `${this.BASE_URL}//categories`;
  private GET_CATEGORY_BY_ID = `${this.BASE_URL}//category//`;
  private POST_CATEGORY_URL = `${this.BASE_URL}//category`;
  private PUT_CATEGORY_URL = `${this.BASE_URL}//category//`;
  private DELETE_CATEGORY_URL = `${this.BASE_URL}/category//`;

  constructor() { }
}
