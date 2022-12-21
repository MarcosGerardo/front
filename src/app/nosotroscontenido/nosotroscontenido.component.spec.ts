import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotroscontenidoComponent } from './nosotroscontenido.component';

describe('NosotroscontenidoComponent', () => {
  let component: NosotroscontenidoComponent;
  let fixture: ComponentFixture<NosotroscontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotroscontenidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosotroscontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
