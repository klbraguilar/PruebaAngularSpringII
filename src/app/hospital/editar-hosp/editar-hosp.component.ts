import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Model/Hospital';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-editar-hosp',
  templateUrl: './editar-hosp.component.html',
  styleUrls: ['./editar-hosp.component.scss']
})
export class EditarHospComponent implements OnInit {
  stylingMode = "underlined";
  hospital: Hospital = new Hospital();
  hospitales: Hospital[]
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar()
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    this.service.getHospitalId(+id)
    .subscribe(data =>{
      this.hospital = data
    })
  }

  Actualizar(hospital:Hospital){
    if (this.hospital.nombre != null && this.hospital.direccion != null) {
          notify('Actualizado correctamente.', 'success');
          this.service.updateHospital(hospital)
          .subscribe(data => {
            this.hospital = data
            this.router.navigate(["listarhosp"])
          })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }    
  }

  Eliminar(hospital:Hospital){
    return this.service.deleteHospital(hospital)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["listarhosp"])
      this.hospitales = this.hospitales.filter(p=>p!==hospital)
    })
  }
}
