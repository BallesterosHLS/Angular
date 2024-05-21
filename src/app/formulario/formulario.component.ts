import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../share/api.service';


export interface Area {
  id: number;
  area: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  form: FormGroup;

  constructor(private _formBuilder: FormBuilder, 
    private _bar:MatSnackBar, 
    private _httpClient:HttpClient,
    private _apiService:ApiService) 
    {
    this.form = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: [''],
      password: ['', [Validators.required]],
      telefono: [''],
      select: [''],
      fechaIngreso: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this._apiService.sendDataFormulario(this.form.value).subscribe(res=>{(console.log(res))});
      this._bar.open("Agregado correctamente", "Cerrar");
    } else {
      this._bar.open("Formulario incompleto", "Cerrar")
    }
  }

  areas: Area[] = [
    { id: 1, area: 'Desarrollo' },
    { id: 2, area: 'Ventas' },
    { id: 3, area: 'Diseño' },
  ];
}
