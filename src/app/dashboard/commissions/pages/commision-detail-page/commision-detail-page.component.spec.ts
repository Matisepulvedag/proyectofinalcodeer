import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommisionDetailPageComponent } from './commision-detail-page.component';

describe('CommisionDetailPageComponent', () => {
  let component: CommisionDetailPageComponent;
  let fixture: ComponentFixture<CommisionDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommisionDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommisionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
