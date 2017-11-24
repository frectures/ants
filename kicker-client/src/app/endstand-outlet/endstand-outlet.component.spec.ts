import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndstandOutletComponent } from './endstand-outlet.component';

describe('EndstandOutletComponent', () => {
  let component: EndstandOutletComponent;
  let fixture: ComponentFixture<EndstandOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndstandOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndstandOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
