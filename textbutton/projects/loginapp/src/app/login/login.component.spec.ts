import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should empty value in inital check', () => {
    const form = component.loginForm;
    expect(form).toBeDefined();
    expect(form.get('email')?.value).toBe('');
    expect(form.get('password')?.value).toBe('');
  });
  it('should required field check of email and password fields', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    emailControl?.setValue('');
    passwordControl?.setValue('');

    expect(emailControl?.valid).toBeFalse();
    expect(passwordControl?.valid).toBeFalse();
  });
});
