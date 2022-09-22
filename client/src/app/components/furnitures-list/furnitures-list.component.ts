import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/furniture.model';
import { FurnitureService } from 'src/app/services/furniture.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-furnitures-list',
  templateUrl: './furnitures-list.component.html',
  styleUrls: ['./furnitures-list.component.css']
})

export class FurnituresListComponent implements OnInit {

  constructor(private furnitureService: FurnitureService, private toastrService: ToastrService) { }


  furnitures?: Furniture[];
  currentIndex: Number = -1;
  currentFurniture: Furniture = {
    name: "",
    price: 0,
    description: "",
    owner: ""
  };

  ngOnInit(): void {
    this.all_furnitures();
  }

  all_furnitures(): void {
    this.furnitureService.all_furnitures().subscribe({
      next: data => {
        this.furnitures = data;
      },
      error: e => {
        console.error(e);
      }
    })
  }

  set_furniture(furniture: Furniture, i: Number): void {
    this.currentIndex = i;
    this.currentFurniture = furniture;
  }

  delete_all_furniture(): void {
    this.furnitureService.delete_all_furnitures().subscribe({
      next: data => {
        this.furnitures = [];
        this.toastrService.success("All furnitures has been removed")
      },
      error: (e) => this.toastrService.error("Can't remove all furnitures")
    });
  }

}
