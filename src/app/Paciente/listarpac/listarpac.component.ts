import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Paciente } from 'src/app/Model/Paciente';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarpac',
  templateUrl: './listarpac.component.html',
  styleUrls: ['./listarpac.component.scss']
})
export class ListarpacComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
  pacientes:Paciente[];
  constructor(private service:ServiceService, private router:Router) { 
    this.showFilterRow = true;
    this.showHeaderFilter = true;
    this.applyFilterTypes = [{
        key: "auto",
        name: "Immediately"
    }, {
        key: "onClick",
        name: "On Button Click"
    }];
  }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => {
      this.pacientes = data;
      console.log(this.pacientes)
    })
  }

  Editar(e){
    if(e.rowType === "data") {
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editarpac"])
    }
  }

}
