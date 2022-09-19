import { Component, Input, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/services/furniture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Furniture } from 'src/app/models/furniture.model';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentFurniture: Furniture = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getFurniture(this.route.snapshot.params["id"]);
    }
  }

  getFurniture(id: string): void {
    this.furnitureService.get(id)
      .subscribe({
        next: (data) => {
          this.currentFurniture = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentFurniture.title,
      description: this.currentFurniture.description,
      published: status
    };

    this.message = '';

    this.furnitureService.update(this.currentFurniture.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentFurniture.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateFurniture(): void {
    this.message = '';

    this.furnitureService.update(this.currentFurniture.id, this.currentFurniture)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This furniture was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteFurniture(): void {
    this.furnitureService.delete(this.currentFurniture.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/furnitures']);
        },
        error: (e) => console.error(e)
      });
  }

}
