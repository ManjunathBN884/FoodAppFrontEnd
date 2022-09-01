import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBranchManagerComponent } from './login-branch-manager.component';

describe('LoginBranchManagerComponent', () => {
  let component: LoginBranchManagerComponent;
  let fixture: ComponentFixture<LoginBranchManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBranchManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBranchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
