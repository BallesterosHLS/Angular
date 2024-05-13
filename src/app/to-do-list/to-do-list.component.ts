import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {

  lista:string[] = [];
  input:string = '';

  nombres = [
    {id: 1, nombre: 'Marissa', edad: 27},
    {id: 2, nombre: 'Jorge', edad: 23},
    {id: 3, nombre: 'Alexa', edad:24}
  ];

  AgregarItem(){
    if(this.input == '') return;

    this.lista.push(this.input);
    this.input = '';
  }

}
