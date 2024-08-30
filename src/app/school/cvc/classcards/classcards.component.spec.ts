import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasscardsComponent } from './classcards.component';

describe('ClasscardsComponent', () => {
  let component: ClasscardsComponent;
  let fixture: ComponentFixture<ClasscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasscardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
