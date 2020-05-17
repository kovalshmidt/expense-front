import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../model/expense';
import {Category} from '../model/category';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = `http://localhost:8080` + `/api`;
  // Expense
  private GET_ALL_EXPENSES_URL = `${this.BASE_URL}/expense/all`;
  private GET_EXPENSE_BY_ID = `${this.BASE_URL}/expense/get/`;
  private POST_EXPENSE_URL = `${this.BASE_URL}/expense/save`;
  private PUT_EXPENSE_URL = `${this.BASE_URL}/expense/update`;
  private DELETE_EXPENSE_URL = `${this.BASE_URL}/expense/delete/`;
  // Category
  private GET_ALL_CATEGORIES_URL = `${this.BASE_URL}/category/all`;
  private GET_CATEGORY_BY_ID = `${this.BASE_URL}/category/get/`;
  private POST_CATEGORY_URL = `${this.BASE_URL}/category/save`;
  private PUT_CATEGORY_URL = `${this.BASE_URL}/category/update`;
  private DELETE_CATEGORY_URL = `${this.BASE_URL}/category/delete/`;
  // User
  private GET_ALL_USERS_URL = `${this.BASE_URL}/user/all`;
  private GET_USER_BY_ID = `${this.BASE_URL}/user/get/`;
  private POST_USER_URL = `${this.BASE_URL}/user/save`;
  private PUT_USER_URL = `${this.BASE_URL}/user/update`;
  private DELETE_USER_URL = `${this.BASE_URL}/user/delete/`;

  constructor(private http: HttpClient) {
  }

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.GET_ALL_EXPENSES_URL);
  }

  getExpenseById(id: string): Observable<Expense> {
    return this.http.get<Expense>(this.GET_EXPENSE_BY_ID + id);
  }

  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(this.PUT_EXPENSE_URL, expense);
  }

  deleteExpense(id: string): Observable<any> {
    return this.http.delete(this.DELETE_EXPENSE_URL + id);
  }

  saveExpense(expense: { description: string; location: string; categoryId: string; expenseDate: string }): Observable<Expense> {
    return this.http.post<Expense>(this.POST_EXPENSE_URL, expense);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.GET_ALL_CATEGORIES_URL);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(this.GET_CATEGORY_BY_ID + id);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.POST_CATEGORY_URL, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(this.PUT_CATEGORY_URL, category);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.DELETE_CATEGORY_URL + id);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.GET_ALL_USERS_URL);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.GET_USER_BY_ID + id);
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.POST_USER_URL, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.PUT_USER_URL, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.DELETE_USER_URL + id);
  }


}
