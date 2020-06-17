import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Model/Hospital';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/hospital/Service/service.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';

@Component({
  selector: 'app-agregar-hosp',
  templateUrl: './agregar-hosp.component.html',
  styleUrls: ['./agregar-hosp.component.scss']
})
export class AgregarHospComponent implements OnInit {

  stylingMode = "underlined";
  hospital: Hospital = new Hospital();
  constructor(private router:Router, private service:ServiceService) { }


  ngOnInit(): void {
    setTimeout(() => validationEngine.validateGroup());
  }

  Nuevo(){
    console.log()
    if (this.hospital.nombre != null && this.hospital.direccion != null) {
      notify('Agregado correctamente.', 'success');
      this.service.createHospital(this.hospital).subscribe(data =>{
        this.router.navigate(["listarhosp"]);
      })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }
  }

}
