import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/furniture.model';
import { FurnitureService } from 'src/app/services/furniture.service';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.css']
})
export class AddFurnitureComponent implements OnInit {

  furniture: Furniture = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
  }

  saveFurniture(): void {
    const data = {
      title: this.furniture.title,
      description: this.furniture.description
    };

    this.furnitureService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFurniture(): void {
    this.submitted = false;
    this.furniture = {
      title: '',
      description: '',
      published: false
    };
  }

}
