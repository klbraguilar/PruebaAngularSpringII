import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Model/Doctor';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  stylingMode = "underlined";
  doctor: Doctor = new Doctor();
  doctores: Doctor[]
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar()
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    this.service.getDoctorId(+id)
    .subscribe(data =>{
      this.doctor = data
    })
  }

  Actualizar(doctor:Doctor){
    if (this.doctor.nombre != null && this.doctor.apellido != null &&
        this.doctor.fechaNacimiento != null && this.doctor.direccion != null) {
          notify('Actualizado correctamente.', 'success');
          this.service.updateDoctor(doctor)
          .subscribe(data => {
            this.doctor = data
            this.router.navigate(["listar"])
          })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }    
  }

  Eliminar(doctor:Doctor){
    return this.service.deleteDoctor(doctor)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["listar"])
      this.doctores = this.doctores.filter(p=>p!==doctor)
    })
  }
}
