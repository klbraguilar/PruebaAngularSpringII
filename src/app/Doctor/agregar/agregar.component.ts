import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Doctor } from 'src/app/Model/Doctor';
import { Hospital } from 'src/app/Model/Hospital';
import notify from 'devextreme/ui/notify';
import { DxSelectBoxComponent} from 'devextreme-angular';
import validationEngine from 'devextreme/ui/validation_engine';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {
  stylingMode = "underlined";
  doctor: Doctor = new Doctor();
  @ViewChild(DxSelectBoxComponent, { static: false }) dxSelectBox: DxSelectBoxComponent;
  hospitales: Hospital[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getHospitales()
    .subscribe(data => {
      this.hospitales = data;
    })
    
    setTimeout(() => validationEngine.validateGroup());
  }
 
  onItemClick(){
    var id = this.dxSelectBox.selectedItem.id;
    console.log(id)
    localStorage.setItem("id", id.toString());
    console.log(localStorage.getItem("id"))
  }

  Nuevo(){
    console.log()
    let id = localStorage.getItem("id");
    if (this.doctor.nombre != null && this.doctor.apellido != null &&
    this.doctor.fechaNacimiento != null && this.doctor.direccion != null &&
    id != null) {
      notify('Agregado correctamente.', 'success');
      this.service.createDoctor(+id, this.doctor).subscribe(data =>{
        this.router.navigate(["listar"]);
      })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }
  }

}

