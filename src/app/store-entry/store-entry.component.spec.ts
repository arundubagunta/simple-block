import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEntryComponent } from './store-entry.component';

describe('StoreEntryComponent', () => {
  let component: StoreEntryComponent;
  let fixture: ComponentFixture<StoreEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
