import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresaListComponent } from './interesa-list.component';

describe('InteresaListComponent', () => {
  let component: InteresaListComponent;
  let fixture: ComponentFixture<InteresaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
