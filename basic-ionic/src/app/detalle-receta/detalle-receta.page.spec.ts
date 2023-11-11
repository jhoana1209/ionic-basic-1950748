import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRecetaPage } from './detalle-receta.page';

describe('DetalleRecetaPage', () => {
  let component: DetalleRecetaPage;
  let fixture: ComponentFixture<DetalleRecetaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

