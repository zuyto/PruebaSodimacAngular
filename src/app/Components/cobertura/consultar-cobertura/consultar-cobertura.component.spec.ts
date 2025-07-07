import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarCoberturaComponent } from './consultar-cobertura.component';

describe('ConsultarCoberturaComponent', () => {
  let component: ConsultarCoberturaComponent;
  let fixture: ComponentFixture<ConsultarCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
