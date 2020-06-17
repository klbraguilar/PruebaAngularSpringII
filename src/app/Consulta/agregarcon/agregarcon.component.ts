import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import notify from 'devextreme/ui/notify';
import { DxSelectBoxComponent} from 'devextreme-angular';
import validationEngine from 'devextreme/ui/validation_engine';
import { Consulta } from 'src/app/Model/Consulta';
import { Paciente } from 'src/app/Model/Paciente';
import { Doctor } from 'src/app/Model/Doctor';

@Component({
  selector: 'app-agregarcon',
  templateUrl: './agregarcon.component.html',
  styleUrls: ['./agregarcon.component.scss']
})
export class AgregarconComponent implements OnInit {
  stylingMode = "underlined";
  consulta: Consulta = new Consulta();
  @ViewChild(DxSelectBoxComponent, { static: false }) dxSelectBox: DxSelectBoxComponent;
  @ViewChild('selectBoxD') dxSelectBoxD: DxSelectBoxComponent;
  pacientes: Paciente[];
  doctores: Doctor[];
  slcDoc:string;
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

    setTimeout(() => validationEngine.validateGroup());
  }

  onItemClick(){
    var idPac = this.dxSelectBox.selectedItem.id;
    console.log("pac:"+ idPac)
    localStorage.setItem("idPac", idPac.toString());
    console.log("pac:"+ localStorage.getItem("idPac"))
  }

  onItemClickDoctor(){
    var idDoc = this.dxSelectBoxD.selectedItem.id;
    console.log("doc"+ idDoc)
    localStorage.setItem("idDoc", idDoc.toString());
    console.log("doc:"+ localStorage.getItem("idDoc"))
  }

  Nuevo(){
    console.log()
    let idPac = localStorage.getItem("idPac");
    let idDoc = localStorage.getItem("idDoc");
    if (this.consulta.descripcion != null && this.consulta.fecha != null &&
    idDoc != null && idPac != null) {
      notify('Agregado correctamente.', 'success');
      this.service.createConsulta(+idPac,+idDoc, this.consulta).subscribe(data =>{
        this.router.navigate(["listarcon"]);
      })
    } else {
        notify('Revise los campos faltantes.', 'error');
    }
  }
}
