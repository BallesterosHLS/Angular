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
  ];

  AgregarItem(){
    //if(this.input == '') return;

    this.lista.push(this.input);
    this.input = '';
  }

}
