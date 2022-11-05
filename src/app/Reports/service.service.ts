import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getSolicitud() {
    return this.http.get<solicitud[]>(this.basePath);
  }


  deleteSolicitud(id:any){
    return this.http.delete<solicitud>(`${this.basePath}/${id}`)
  }
}
