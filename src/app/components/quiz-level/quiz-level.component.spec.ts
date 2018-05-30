import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLevelComponent } from './quiz-level.component';

describe('QuizLevelComponent', () => {
  let component: QuizLevelComponent;
  let fixture: ComponentFixture<QuizLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
