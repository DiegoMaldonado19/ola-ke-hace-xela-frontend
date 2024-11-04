import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApprovalPendingComponent } from './post-approval-pending.component';

describe('PostApprovalPendingComponent', () => {
  let component: PostApprovalPendingComponent;
  let fixture: ComponentFixture<PostApprovalPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApprovalPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApprovalPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
