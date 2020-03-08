import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Category} from "../model/Category";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];
  category: Category;

  constructor(private  apiService : ApiService) { }

  ngOnInit() {
    this.getAllCategories();
    this.getCategoryById('2');
  }

  getAllCategories(){

    this.apiService.getAllCategories().subscribe(
      res => {
        this.categories = res;
        console.log(this.categories);
      },

      err => {
        console.log(err.toString())
        alert("An error has occurred while getting the categories");
      }
    );
  }

  updateCategory(updateCategory: Category) {
    this.apiService.updateCategory(updateCategory).subscribe(
      res => {
      },
      err => {
        console.log(err.toString())
        alert("An error has occurred while updating the category");
      }
    );
  }

  saveCategory(saveCategory: Category) {
    this.apiService.saveCategory(saveCategory).subscribe(
      res => {
      },
      err => {
        console.log(err.toString())
        alert("An error has occurred while saving the category");
      }
    );
  }

  deleteCategory(category: Category) {
    if (confirm("Are you sure to delete the category")){
      this.apiService.deleteCategory(category.id).subscribe(
        res => {
          let indexOfCategory =this.categories.indexOf(category);
          this.categories.splice(indexOfCategory, 1);
        },
        err => {
          console.log(err.toString())
          alert("An error has occurred while deleting the category");
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
        alert("An error has occurred while downloading the category");
      }
    );
  }
}
