import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { Paciente } from 'src/app/Model/Paciente';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editarpac',
  templateUrl: './editarpac.component.html',
  styleUrls: ['./editarpac.component.scss']
})
export class EditarpacComponent implements OnInit {
  stylingMode = "underlined";
  paciente: Paciente = new Paciente();
  pacientes: Paciente[]
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar()
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    this.service.getPacienteId(+id)
    .subscribe(data =>{
      this.paciente = data
    })
  }

  Actualizar(paciente:Paciente){
    if (this.paciente.nombre != null && this.paciente.apellido != null &&
        this.paciente.fechaNacimiento != null && this.paciente.direccion != null 
        && this.paciente.telefono != null) {
          if(this.paciente.telefono.toString().length < 11 ) {
            notify('Actualizado correctamente.', 'success');
            this.service.updatePaciente(paciente)
            .subscribe(data => {
              this.paciente = data
              this.router.navigate(["listarpac"])
            })
          }else{
            notify('Excede la longitud de telefono.', 'error');
          }  
    } else {
        notify('Revise los campos faltantes.', 'error');
    }    
  }

  Eliminar(paciente:Paciente){
    return this.service.deletePaciente(paciente)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["listarpac"])
      this.pacientes = this.pacientes.filter(p=>p!==paciente)
    })
  }
}
