import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerComponentComponent } from './employer-component.component';

describe('EmployerComponentComponent', () => {
  let component: EmployerComponentComponent;
  let fixture: ComponentFixture<EmployerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
