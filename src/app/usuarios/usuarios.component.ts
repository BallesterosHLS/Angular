import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../share/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements AfterViewInit, OnInit{
  dataSource:any[] = [];
  displayedColumns: string[] = ['nombre', 'apellidos', 'email', 'telefono', 'select', 'fechaIngreso'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;

  constructor(private _apiService:ApiService){
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  dataSource2:any;

  ngOnInit(): void {
    this._apiService.getDataFormulario().subscribe((res=>{
      this.dataSource = res;
      this.dataSource2 = new MatTableDataSource(this.dataSource)
      this.dataSource2.paginator = this.paginator;
    }));
    
  }



}
