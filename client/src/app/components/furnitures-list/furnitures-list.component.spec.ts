import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnituresListComponent } from './furnitures-list.component';

describe('FurnituresListComponent', () => {
  let component: FurnituresListComponent;
  let fixture: ComponentFixture<FurnituresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnituresListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnituresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
