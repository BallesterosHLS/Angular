import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from '../share/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private api: APIService,
    private router:Router){
    this.loginForm = this.formulario.group({
      correo: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }
  ngOnInit(): void {
    this.api.getDataFormulario().subscribe((res=>{
      this.lista=res;
    }));
  }
  onLoginSubmit(){
    let bandera = false;
    if(this.loginForm.valid){
      for(let i = 0; i < this.lista.length; i++){
        if(this.correo == this.lista[i].correo 
          && this.password == this.lista[i].password
        ){
          console.log("Login correcto");
          this.router.navigate(['']);
          bandera = true;
        }
      }
      if(!bandera){
        alert("La contraseña y/o el correo son incorrectos");
        this.correo = "";
        this.password = "";
      }
    }
  }
  lista:any[] = [];
  correo:string;
  password:string;
}
