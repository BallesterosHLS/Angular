import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.nombreC);
  }
  @Input() nombreC:any[];
  @Output() outputC = new EventEmitter<any>();
  enviarDatos(){
    this.outputC.emit("Datos enviados del Hijo");
  }
}
