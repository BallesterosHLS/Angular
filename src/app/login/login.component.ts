import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _bar:MatSnackBar) {
    this.loginForm = this._formBuilder.group({
      correo: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this._bar.open("Datos incorrectos", "Cerrar");
    }
  }
}
