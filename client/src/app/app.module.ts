import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';
import { FurnitureDetailsComponent } from './components/furniture-details/furniture-details.component';
import { FurnituresListComponent } from './components/furnitures-list/furnitures-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFurnitureComponent,
    FurnitureDetailsComponent,
    FurnituresListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
