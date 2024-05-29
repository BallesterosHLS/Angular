import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ParentComponent } from '../parent/parent.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../share/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  id:string,
  nombre:string,
  apellidos: string,
  email: string,
  password:string,
  telefono: string,
  select: string,
  fechaIngreso:string
}

export interface Area {
  id: number;
  area: string;
}

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, AfterViewInit{

  @ViewChild(ParentComponent) vistaParent:ParentComponent;

  form:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _apiService:ApiService,
    private _bar:MatSnackBar,
    private _formBuilder:FormBuilder,
  ) {
    this.form = this._formBuilder.group({
      id: [data.id],
      nombre: [data.nombre],
      apellidos: [data.apellidos],
      email: [data.email],
      telefono: [data.telefono],
      select: [data.select]
  });
}

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  onSubmit() {
    if (this.form.valid) {
      this._apiService.updateDataFormulario(this.data.id, this.form.value).subscribe(res=>{(console.log(res))}); 
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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
