import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}



  addSolicitud(solicitud: solicitud){
    return this.http.post<solicitud>(this.basePath, solicitud);
  }

  
}
