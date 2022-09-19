import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/furniture.model';
import { FurnitureService } from 'src/app/services/furniture.service';

@Component({
  selector: 'app-furnitures-list',
  templateUrl: './furnitures-list.component.html',
  styleUrls: ['./furnitures-list.component.css']
})
export class FurnituresListComponent implements OnInit {

  furnitures?: Furniture[];
  currentFurniture: Furniture = {};
  currentIndex = -1;
  title = '';

  constructor(private furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.retrieveFurnitures();
  }

  retrieveFurnitures(): void {
    this.furnitureService.getAll()
      .subscribe({
        next: (data) => {
          this.furnitures = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveFurnitures();
    this.currentFurniture = {};
    this.currentIndex = -1;
  }

  setActiveFurniture(furniture: Furniture, index: number): void {
    this.currentFurniture = furniture;
    this.currentIndex = index;
  }

  removeAllFurnitures(): void {
    this.furnitureService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentFurniture = {};
    this.currentIndex = -1;

    this.furnitureService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.furnitures = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
