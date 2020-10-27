import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandilautomotoresRepuestosComponent } from './tandilautomotores-repuestos.component';

describe('TandilautomotoresRepuestosComponent', () => {
  let component: TandilautomotoresRepuestosComponent;
  let fixture: ComponentFixture<TandilautomotoresRepuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandilautomotoresRepuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TandilautomotoresRepuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
