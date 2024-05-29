import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../share/api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements AfterViewInit, OnInit{
  dataSource:any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'email', 'telefono', 'select', 'fechaIngreso', 'edit', 'delete'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _apiService:ApiService, public dialog: MatDialog){
  }

  ngAfterViewInit(): void {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  dataSource2:any;

  ngOnInit(): void {
    this._apiService.getDataFormulario().subscribe((res=>{
      this.dataSource = res;
      this.dataSource2 = new MatTableDataSource(this.dataSource)
      this.dataSource2.paginator = this.paginator;
    }));
  }

  editUsuario(){

  }

  users:any;

  deleteUsuario(row:any){
    this._apiService.deleteDataFormulario(row.id).subscribe((res=>{console.log(res)
    }));
  }

  //DIALOLG

  openDialog(row:any): void {
    const dialogRef = this.dialog.open(EditarComponent, {
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
