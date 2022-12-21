import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWsComponent } from './button-ws.component';

describe('ButtonWsComponent', () => {
  let component: ButtonWsComponent;
  let fixture: ComponentFixture<ButtonWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
