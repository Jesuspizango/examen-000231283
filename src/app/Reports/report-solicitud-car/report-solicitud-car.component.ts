import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudService } from 'src/app/Reports/service.service';
import { solicitud } from '../../models/solicitud';

@Component({
  selector: 'app-list-employee',
  templateUrl: './report-solicitud-car.component.html',
  styleUrls: ['./report-solicitud-car.component.css'],
})
export class ReportSolicitudCarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'tarjeta', 'soat','actions'];
  dataSource = new MatTableDataSource<solicitud>();

  @ViewChild(MatPaginator) paginator!:MatPaginator;


  constructor(private solicitudService: SolicitudService,
    private snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.getSolicitud();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getSolicitud() {
    this.solicitudService.getSolicitud().subscribe((data: solicitud[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }


  deleteSolicitud(id:number){
    this.solicitudService.deleteSolicitud(id).subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((e:solicitud)=>{
        this.snackBar.open("Solicitud eliminado",'',{
          duration:3000,
        })
        return e.id!=id?e:false
      })
    })
  }
}
