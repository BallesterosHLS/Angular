import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

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

  constructor(private _formBuilder: FormBuilder, private _bar:MatSnackBar) {
    this.form = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      email: [''],
      telefono: [''],
      select: [''],
      fechaIngreso: [''],
    });
  }



  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //this._bar.open(Texto que se muestra, texto del botón para cerrar)
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
