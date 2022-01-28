import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductsViewComponent } from './client-products-view.component';

describe('ClientProductsViewComponent', () => {
  let component: ClientProductsViewComponent;
  let fixture: ComponentFixture<ClientProductsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProductsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProductsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
