import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: ClientHeaderComponent;
  let fixture: ComponentFixture<ClientHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
