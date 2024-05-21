import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from '../share/api.service';

interface Area{
  value: string;
  viewValue: string;
};
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent { 
  form: FormGroup;
  hoy = Date();
  constructor(private formulario: FormBuilder, private bar: MatSnackBar, private http:HttpClient, private api:APIService){
    this.form = this.formulario.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correo: [''],
      password: ['',[Validators.required]],
      telefono: [''],
      area: [''],
      pickerF: ['']
    });
  }
  onSumbit(){
    if(this.form.valid){
      console.log(this.form.value);
      this.api.sendDataFormulario(this.form.value).subscribe(res=>{(console.log(res))});      
      this.bar.open("Agregado Correctamente","cerrar");
    }
    else{
      console.log("Formulario Incompleto");
      this.bar.open("Formulario Incompleto","cerrar");
    }
  }
  areas: Area[] = [
    {value: 'Desarrollo-0', viewValue: 'Desarrollo'},
    {value: 'Diseño-1', viewValue: 'Diseño'},
    {value: 'Recursos Humanos-2', viewValue: 'Recursos Humanos'}
  ];

}
