import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnWSComponent } from './bttn-ws.component';

describe('BttnWSComponent', () => {
  let component: BttnWSComponent;
  let fixture: ComponentFixture<BttnWSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnWSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BttnWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
