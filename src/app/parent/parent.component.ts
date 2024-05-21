import { Component, OnInit } from '@angular/core';
import { ApiService } from '../share/api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  nombreP:any;

  constructor(private _apiService:ApiService){
  }

  recibe:any;
  recibeDatos(event: any){
    this.recibe = event;
  }

  ngOnInit(): void {
    this._apiService.getDataFormulario().subscribe((res=>{
      this.nombreP = res;
    }));
  }
}
