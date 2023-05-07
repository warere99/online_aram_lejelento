import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeroorakComponent } from './meroorak.component';

describe('MeroorakComponent', () => {
  let component: MeroorakComponent;
  let fixture: ComponentFixture<MeroorakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeroorakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeroorakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
