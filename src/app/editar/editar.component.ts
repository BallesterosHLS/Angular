import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from '../share/api.service';
import { ChildComponent } from '../child/child.component';
import { DatosComponentComponent } from '../datos-component/datos-component.component';
import { ReactiveFormsModule } from '@angular/forms';

export interface DialogData {
  id:string,
  nombre:string,
  apellidos: string,
  correo: string,
  password:string,
  telefono: string,
  area: string,
  pickerF:string
}
interface Area{
  value: string;
  viewValue: string;
};
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private formulario: FormBuilder,
    private bar: MatSnackBar, 
    private api:APIService
  ) {
    this.form = this.formulario.group({
      id:[data.id],
      nombre: [data.nombre],
      apellidos: [data.apellidos],
      correo: [data.correo],
      password: [data.password],
      telefono: [data.telefono],
      area: [data.area],
      pickerF: [data.pickerF]
    });
  }
  ngOnInit(): void {
    console.log(this.data);
  }
  onSumbit(){
    if(this.form.valid){
      console.log("formulario"+this.form.value);
      console.log("data"+this.data)
      this.api.updateDataFormulario(this.data.id,this.form.value).subscribe(res=>{(console.log(res))});
      this.bar.open("Actualizado Correctamente","cerrar");
      window.location.reload();
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
  onNoClick(): void {
    this.dialogRef.close();
  }
}
