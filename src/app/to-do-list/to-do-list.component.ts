import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent {
  Items:string[] = [];
  input:string = '';
  oficina = [
    
  ]
  AgregarItem(){
    //if(this.input=='') return;
    
    this.Items.push(this.input);
    this.input = '';
  }
}
