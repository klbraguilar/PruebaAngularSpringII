import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { ServiceService } from 'src/app/hospital/Service/service.service';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Model/Hospital';
import { Doctor } from 'src/app/Model/Doctor';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';

@Component({
  selector: 'app-listar-hosp',
  templateUrl: './listar-hosp.component.html',
  styleUrls: ['./listar-hosp.component.scss']
})
export class ListarHospComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent;
    applyFilterTypes: any;
    currentFilter: any;
    showFilterRow: boolean;
    showHeaderFilter: boolean;

    hospitales:Hospital[];
    doctores: Doctor[];
    tasksDataSourceStorage: any;
  constructor(private service:ServiceService, private router:Router) { 
    this.tasksDataSourceStorage = [];
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
    this.service.getHospitales()
    .subscribe(data => {
      this.hospitales = data;
      console.log(this.hospitales)
    })

    this.service.getDoctores()
    .subscribe(data => {
      this.doctores = data;
      console.log(this.doctores)
    })

  }

  getTasks(key) {
    let item = this.tasksDataSourceStorage.find((i) => i.key === key);
    if (!item) {
        item = {
            key: key,
            dataSourceInstance: new DataSource({
                store: new ArrayStore({
                    data: this.doctores,
                    key: "id"
                }),
                filter: ["hospital.id", "=", key]
            })
        };
        this.tasksDataSourceStorage.push(item)
    }
    return item.dataSourceInstance;
  }
  
  Editar(e){
    if(e.rowType === "data") {
      var id = this.dataGrid.instance.getKeyByRowIndex(e.rowIndex)
      console.log(id)
      localStorage.setItem("id", id.toString());
      this.router.navigate(["editarhosp"])
    }
  }

}
