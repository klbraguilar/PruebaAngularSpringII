import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from  '../../Service/service.service';
import { DxDataGridComponent } from 'devextreme-angular';
import { Consulta } from 'src/app/Model/Consulta';

@Component({
  selector: 'app-listarcon',
  templateUrl: './listarcon.component.html',
  styleUrls: ['./listarcon.component.scss']
})
export class ListarconComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;
  consultas: Consulta[];
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
    this.service.getConsultas()
    .subscribe(data => {
      this.consultas = data;
      console.log(data)
    })
  }

  Editar(e){
    if(e.rowType === "data") {
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editarcon"])
    }
  }

}
