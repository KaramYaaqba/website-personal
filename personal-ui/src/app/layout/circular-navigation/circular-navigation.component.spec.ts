import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularNavigationComponent } from './circular-navigation.component';

describe('CircularNavigationComponent', () => {
  let component: CircularNavigationComponent;
  let fixture: ComponentFixture<CircularNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircularNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
