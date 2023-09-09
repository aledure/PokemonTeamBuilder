import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationFilterComponent } from './generation-filter.component';

describe('GenerationFilterComponent', () => {
  let component: GenerationFilterComponent;
  let fixture: ComponentFixture<GenerationFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerationFilterComponent]
    });
    fixture = TestBed.createComponent(GenerationFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
