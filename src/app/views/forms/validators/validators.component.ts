import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent {

  title = 'loginForm';
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      oracleId: ['', Validators.maxLength(6)],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && (control.dirty || control.touched)&& !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'name': '',
    'oracleId': '',
    'password' :''
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'password': {
      'required': 'please enter password'
    }
  };
  onSubmit() {
    this.submitted = true;
  }

}

