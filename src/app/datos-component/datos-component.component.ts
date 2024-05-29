import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { APIService } from '../share/api.service';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-datos-component',
  templateUrl: './datos-component.component.html',
  styleUrls: ['./datos-component.component.css']
})
export class DatosComponentComponent implements OnInit, AfterViewInit{
  constructor(private api:APIService, private dialog:MatDialog){
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.api.getDataFormulario().subscribe((res=>{
      this.lista=res;
      this.dataSource = new MatTableDataSource(this.lista);
      this.dataSource.paginator = this.paginator; //nuevo
      this.dataSource.sort = this.sort; //nuevo
      this.length = this.dataSource.length // nuevo
    }));
  }
  dataSource:any;
  lista:any[] = [];
  displayedColumns: string[] = ['id','nombre', 'apellidos', 'correo', 'telefono','area','fecha','actualizar','borrar'];
  length:number;

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) { //nuevo
      this.dataSource.paginator.firstPage(); 
    }
  }
  delete(element:any){ //nuevo
    this.api.deleteDataFormulario(element.id).subscribe(res=>{(console.log(res))});
    window.location.reload();
  }
  openDialog(i:any): void {
    const dialogRef = this.dialog.open(EditarComponent, {
      data: i
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
  
}

