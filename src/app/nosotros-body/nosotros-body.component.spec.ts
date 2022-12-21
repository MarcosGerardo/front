import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosBodyComponent } from './nosotros-body.component';

describe('NosotrosBodyComponent', () => {
  let component: NosotrosBodyComponent;
  let fixture: ComponentFixture<NosotrosBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotrosBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
