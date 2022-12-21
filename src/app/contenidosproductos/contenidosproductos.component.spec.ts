import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidosproductosComponent } from './contenidosproductos.component';

describe('ContenidosproductosComponent', () => {
  let component: ContenidosproductosComponent;
  let fixture: ComponentFixture<ContenidosproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidosproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidosproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
