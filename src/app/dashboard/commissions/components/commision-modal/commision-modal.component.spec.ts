import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionModalComponent } from './commision-modal.component';

describe('CommisionModalComponent', () => {
  let component: CommisionModalComponent;
  let fixture: ComponentFixture<CommisionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommisionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
