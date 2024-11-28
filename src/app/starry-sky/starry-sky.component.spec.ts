import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarrySkyComponent } from './starry-sky.component';

describe('StarrySkyComponent', () => {
  let component: StarrySkyComponent;
  let fixture: ComponentFixture<StarrySkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarrySkyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarrySkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
