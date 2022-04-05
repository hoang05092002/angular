import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ClientProductComponent;
  let fixture: ComponentFixture<ClientProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
