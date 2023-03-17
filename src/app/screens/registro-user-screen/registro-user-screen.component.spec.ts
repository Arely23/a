import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUserScreenComponent } from './registro-user-screen.component';

describe('RegistroUserScreenComponent', () => {
  let component: RegistroUserScreenComponent;
  let fixture: ComponentFixture<RegistroUserScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUserScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
