import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjadatComponent } from './ujadat.component';

describe('UjadatComponent', () => {
  let component: UjadatComponent;
  let fixture: ComponentFixture<UjadatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjadatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjadatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
