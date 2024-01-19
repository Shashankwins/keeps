import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesGroupComponent } from './notes-group.component';

describe('NotesGroupComponent', () => {
  let component: NotesGroupComponent;
  let fixture: ComponentFixture<NotesGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
