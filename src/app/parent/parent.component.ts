import { Component, OnInit } from '@angular/core';
import { APIService } from '../share/api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  nombreP:any;
  constructor(private api:APIService){}
  ngOnInit(): void {
    this.api.getDataFormulario().subscribe((res=>{
      this.nombreP=res;
    }));
  }
  datosHijo:any;
  ouputP(event:Event){
    this.datosHijo = event;
  }
}
