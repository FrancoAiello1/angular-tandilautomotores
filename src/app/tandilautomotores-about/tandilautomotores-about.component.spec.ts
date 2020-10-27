import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TandilautomotoresAboutComponent } from './tandilautomotores-about.component';

describe('TandilautomotoresAboutComponent', () => {
  let component: TandilautomotoresAboutComponent;
  let fixture: ComponentFixture<TandilautomotoresAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TandilautomotoresAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TandilautomotoresAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
