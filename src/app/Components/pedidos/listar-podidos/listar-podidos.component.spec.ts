import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPodidosComponent } from './listar-podidos.component';

describe('ListarPodidosComponent', () => {
  let component: ListarPodidosComponent;
  let fixture: ComponentFixture<ListarPodidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPodidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPodidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
