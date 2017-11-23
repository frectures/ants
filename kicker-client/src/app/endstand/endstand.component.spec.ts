import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndstandComponent } from './endstand.component';

describe('EndstandComponent', () => {
  let component: EndstandComponent;
  let fixture: ComponentFixture<EndstandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndstandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
