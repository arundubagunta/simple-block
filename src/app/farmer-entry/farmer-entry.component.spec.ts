import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerEntryComponent } from './farmer-entry.component';

describe('FarmerEntryComponent', () => {
  let component: FarmerEntryComponent;
  let fixture: ComponentFixture<FarmerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
