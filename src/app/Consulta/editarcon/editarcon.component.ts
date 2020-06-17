import { Component, OnInit, ViewChild } from '@angular/core';
import { Consulta } from 'src/app/Model/Consulta';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import notify from 'devextreme/ui/notify';
import validationEngine from 'devextreme/ui/validation_engine';
import { Paciente } from 'src/app/Model/Paciente';
import { Doctor } from 'src/app/Model/Doctor';
import { DxSelectBoxComponent } from 'devextreme-angular';

@Component({
  selector: 'app-editarcon',
  templateUrl: './editarcon.component.html',
  styleUrls: ['./editarcon.component.scss']
})
export class EditarconComponent implements OnInit {
  stylingMode = "underlined";
  consulta: Consulta = new Consulta();
  consultas: Consulta[]
  @ViewChild(DxSelectBoxComponent, { static: false }) dxSelectBox: DxSelectBoxComponent;
  @ViewChild('selectBoxD') dxSelectBoxD: DxSelectBoxComponent;
  pacientes: Paciente[];
  doctores: Doctor[];
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => {
      this.pacientes = data;
    })

    this.service.getDoctores()
    .subscribe(data => {
      this.doctores = data;
    })
    this.Editar()
    setTimeout(() => validationEngine.validateGroup());
  }

  Editar(){
    let id = localStorage.getItem("id")
    this.service.getConsultaId(+id)
    .subscribe(data =>{
      this.consulta = data
    })
  }

  Actualizar(consulta:Consulta){
    if (this.consulta.descripcion != null && this.consulta.fecha != null ) {
          notify('Actualizado correctamente.', 'success');
          this.service.updateConsulta(consulta)
          .subscribe(data => {
            this.consulta = data
            this.router.navigate(["listarcon"])
          })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }    
  }

  Eliminar(consulta:Consulta){
    return this.service.deleteConsulta(consulta)
    .subscribe(data => {
      notify('Eliminado correctamente', 'success');
      this.router.navigate(["listarcon"])
      this.consultas = this.consultas.filter(p=>p!==consulta)
    })
  }

}
