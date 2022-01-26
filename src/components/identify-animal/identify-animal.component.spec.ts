import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyAnimalComponent } from './identify-animal.component';

describe('IdentifyAnimalComponent', () => {
  let component: IdentifyAnimalComponent;
  let fixture: ComponentFixture<IdentifyAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
