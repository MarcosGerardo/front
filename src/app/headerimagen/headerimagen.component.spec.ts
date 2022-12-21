import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderimagenComponent } from './headerimagen.component';

describe('HeaderimagenComponent', () => {
  let component: HeaderimagenComponent;
  let fixture: ComponentFixture<HeaderimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
