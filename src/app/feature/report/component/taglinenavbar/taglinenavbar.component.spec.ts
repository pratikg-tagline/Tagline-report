import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglinenavbarComponent } from './taglinenavbar.component';

describe('TaglinenavbarComponent', () => {
  let component: TaglinenavbarComponent;
  let fixture: ComponentFixture<TaglinenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglinenavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglinenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
