import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycontactoComponent } from './bodycontacto.component';

describe('BodycontactoComponent', () => {
  let component: BodycontactoComponent;
  let fixture: ComponentFixture<BodycontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodycontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodycontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
