import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Category} from '../model/category';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  message1 = '';
  message2 = '';
  categories: Category[] = [];
  category: Category = {
    id: null,
    name: null
  };

  constructor(private  apiService: ApiService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {

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

  updateCategory(updateCategory: Category) {
    this.apiService.updateCategory(updateCategory).subscribe(
      res => {
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while updating the category');
      }
    );
  }

  saveCategory(saveCategory: Category, f: NgForm) {
    this.apiService.saveCategory(saveCategory).subscribe(
      res => {
        this.categories.push(res);
        console.log(this.categories);
        this.message1 = 'Successfully saved';
      },
      err => {
        console.log(err.toString());
        this.message2 = 'An error has occurred';
      }
    );
    if (f.form.valid) {
      f.resetForm();
    }
  }

  deleteCategory(category: Category) {
    if (confirm('Are you sure to delete the category')) {
      this.apiService.deleteCategory(category.id).subscribe(
        res => {
          const indexOfCategory = this.categories.indexOf(category);
          this.categories.splice(indexOfCategory, 1);
        },
        err => {
          console.log(err.toString());
          alert('An error has occurred while deleting the category');
        }
      );
    }
  }

  getCategoryById(id: string) {
    this.apiService.getCategoryById(id).subscribe(
      res => {
        this.category = res;
      },
      err => {
        console.log(err.toString());
        alert('An error has occurred while downloading the category');
      }
    );
  }


}


