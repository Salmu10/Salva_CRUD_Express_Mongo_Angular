import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnituresListComponent } from './components/furnitures-list/furnitures-list.component';
import { FurnitureDetailsComponent } from './components/furniture-details/furniture-details.component';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';

const routes: Routes = [
  { path: '', redirectTo: 'furnitures', pathMatch: 'full' },
  { path: 'furnitures', component: FurnituresListComponent },
  { path: 'furnitures/:id', component: FurnitureDetailsComponent },
  { path: 'add', component: AddFurnitureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
