import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosComponentComponent } from './datos-component.component';

describe('DatosComponentComponent', () => {
  let component: DatosComponentComponent;
  let fixture: ComponentFixture<DatosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
