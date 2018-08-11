import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelOfJeopardyComponent } from './wheel-of-jeopardy.component';

describe('WheelOfJeopardyComponent', () => {
  let component: WheelOfJeopardyComponent;
  let fixture: ComponentFixture<WheelOfJeopardyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelOfJeopardyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelOfJeopardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
