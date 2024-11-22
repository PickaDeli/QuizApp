import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerSienceComponent } from './computer-sience.component';

describe('ComputerSienceComponent', () => {
  let component: ComputerSienceComponent;
  let fixture: ComponentFixture<ComputerSienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerSienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerSienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
