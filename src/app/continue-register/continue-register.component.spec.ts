import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueRegisterComponent } from './continue-register.component';

describe('ContinueRegisterComponent', () => {
  let component: ContinueRegisterComponent;
  let fixture: ComponentFixture<ContinueRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinueRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinueRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
