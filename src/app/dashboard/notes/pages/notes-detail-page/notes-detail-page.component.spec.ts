import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDetailPageComponent } from './notes-detail-page.component';

describe('NotesDetailPageComponent', () => {
  let component: NotesDetailPageComponent;
  let fixture: ComponentFixture<NotesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
