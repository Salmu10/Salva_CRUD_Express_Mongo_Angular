import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})

export class CategoriesListComponent implements OnInit {

  constructor(private categoryService: CategoryService, private toastrService: ToastrService) { }


  categories?: Category[];
  currentIndex: Number = -1;
  currentCategory: Category = {
    category_name: "",
    category_picture: ""
  };

  ngOnInit(): void {
    this.all_categories();
  }

  all_categories(): void {
    this.categoryService.all_categories().subscribe({
      next: data => {
        this.categories = data;
      },
      error: e => {
        console.error(e);
      }
    })
  }

  set_category(category: Category, i: Number): void {
    this.currentIndex = i;
    this.currentCategory = category;
  }

  delete_all_category(): void {
    this.categoryService.delete_all_categories().subscribe({
      next: data => {
        this.categories = [];
        this.toastrService.success("All categories has been removed")
      },
      error: (e) => this.toastrService.error("Can't remove all categories")
    });
  }

}
