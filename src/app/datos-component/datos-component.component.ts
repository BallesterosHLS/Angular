import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../share/api.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-datos-component',
  templateUrl: './datos-component.component.html',
  styleUrls: ['./datos-component.component.css']
})
export class DatosComponentComponent implements OnInit, AfterViewInit{
  
  constructor(private api:APIService){
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.api.getDataFormulario().subscribe((res=>{
      this.lista=res;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator;
    }));
  }
  dataSource:any;
  lista:any[] = [];

  displayedColumns: string[] = ['id','nombre', 'apellidos', 'correo', 'telefono','area','fecha'];

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
