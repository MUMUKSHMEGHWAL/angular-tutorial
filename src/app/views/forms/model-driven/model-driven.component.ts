import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent {

  title = 'loginForm';
  loginForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      oracleId: ['', Validators.maxLength(6)],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('called');
  }

}

