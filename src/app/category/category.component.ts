import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/api.service';
import {Category} from '../model/category';
import {NgForm} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class CategoryComponent implements OnInit {
  messages: InfoMessage[] = [];
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
    saveCategory = null;
    this.apiService.saveCategory(saveCategory).subscribe(
      res => {
        this.categories.push(res);
        console.log(this.categories);
        // Add message about successful save
        this.messages.push({error: false, text: 'Saved successfully'});
        // Clear array with messages
        setTimeout(() => {
          this.messages = [];
        }, 2000);
      },
      err => {
        console.log(err.toString());
        // Add message about error
        this.messages.push({error: true, text: 'An error has occurred'});
        // Clear array with messages
        setTimeout(() => {
          this.messages = [];
        }, 2000);
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

export interface InfoMessage {
  error: boolean;
  text: string;
}


