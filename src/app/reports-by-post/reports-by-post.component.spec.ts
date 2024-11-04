import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsByPostComponent } from './reports-by-post.component';

describe('ReportsByPostComponent', () => {
  let component: ReportsByPostComponent;
  let fixture: ComponentFixture<ReportsByPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsByPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsByPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
