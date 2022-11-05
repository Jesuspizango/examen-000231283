import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { solicitud } from 'src/app/models/solicitud';
import { RegisterService} from 'src/app/Inscriptions/service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './register-solicitud-car.component.html',
  styleUrls: ['./register-solicitud-car.component.css']
})
export class RegisterSolicitudCarComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private registerService:RegisterService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      tarjeta:['',[Validators.required]],
      soat:['',[Validators.required]],
    })
  }

  saveSolicitud(){
    
    const solicitud: solicitud={
      id:0,
      tarjeta: this.myForm.get('tarjeta')?.value,
      soat : this.myForm.get('soat')?.value
    };

    this.registerService.addSolicitud(solicitud)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['business/solicitud']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
