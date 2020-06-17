import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from  '../../Service/service.service';
import { Doctor } from 'src/app/Model/Doctor';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

  doctores:Doctor[];
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
    this.service.getDoctores()
    .subscribe(data => {
      this.doctores = data;
      console.log(data)
    })
  }

  Editar(e){
    if(e.rowType === "data") {
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editar"])
    }
  }

}
