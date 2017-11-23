import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEndstandComponent } from './new-endstand.component';

describe('NewEndstandComponent', () => {
  let component: NewEndstandComponent;
  let fixture: ComponentFixture<NewEndstandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEndstandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEndstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
