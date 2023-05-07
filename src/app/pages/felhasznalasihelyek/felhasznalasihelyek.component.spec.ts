import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelhasznalasihelyekComponent } from './felhasznalasihelyek.component';

describe('FelhasznalasihelyekComponent', () => {
  let component: FelhasznalasihelyekComponent;
  let fixture: ComponentFixture<FelhasznalasihelyekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelhasznalasihelyekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelhasznalasihelyekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
