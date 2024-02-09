import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFramworkComponent } from './start-framwork.component';

describe('StartFramworkComponent', () => {
  let component: StartFramworkComponent;
  let fixture: ComponentFixture<StartFramworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartFramworkComponent]
    });
    fixture = TestBed.createComponent(StartFramworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
