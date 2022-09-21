import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular 13 CRUD example';

  constructor(private toastrService: ToastrService) {
  }

  public newFurniture(): void {
    this.toastrService.success('Save Success!', 'Title Success!');
  }
}
