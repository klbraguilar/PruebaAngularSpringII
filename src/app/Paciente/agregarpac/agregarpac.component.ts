import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Paciente } from 'src/app/Model/Paciente';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-agregarpac',
  templateUrl: './agregarpac.component.html',
  styleUrls: ['./agregarpac.component.scss']
})
export class AgregarpacComponent implements OnInit {
  stylingMode = "underlined";
  paciente: Paciente = new Paciente();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  Nuevo(){
    console.log()
    if (this.paciente.nombre != null && this.paciente.apellido != null 
      && this.paciente.fechaNacimiento != null && this.paciente.direccion != null
      && this.paciente.telefono != null) {
      if(this.paciente.telefono.toString().length < 11 ) {
        notify('Agregado correctamente.', 'success');
          this.service.createPaciente(this.paciente).subscribe(data =>{
          this.router.navigate(["listarpac"]);
        })
      }else{
        notify('Excede la longitud de telefono.', 'error');
      } 
      
    } else {
        notify('Revise los campos faltantes.', 'error');
    }
  }
}
