import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.nombreC)
  }
  @Input() nombreC:any[];

  @Output() dataFromChild:EventEmitter<any> = new EventEmitter();
  childData = "Datos del hijo"
  enviarDatos(){
    this.dataFromChild.emit(this.childData);
  }
  
}
