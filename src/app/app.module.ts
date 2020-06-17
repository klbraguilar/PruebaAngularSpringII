import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { 
  DxDataGridComponent,
  DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxDateBoxModule,
  DxValidatorModule,
  DxNumberBoxModule
} from 'devextreme-angular';
import { ListarComponent } from './Doctor/listar/listar.component';
import { AgregarComponent } from './Doctor/agregar/agregar.component';
import { EditarComponent } from './Doctor/editar/editar.component';
import { FormsModule } from '@angular/forms'
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { ListarHospComponent } from './hospital/listar-hosp/listar-hosp.component';
import { AgregarHospComponent } from './hospital/agregar-hosp/agregar-hosp.component';
import { EditarHospComponent } from './hospital/editar-hosp/editar-hosp.component';
import { AgregarpacComponent } from './Paciente/agregarpac/agregarpac.component';
import { EditarpacComponent } from './Paciente/editarpac/editarpac.component';
import { ListarpacComponent } from './Paciente/listarpac/listarpac.component';
import { AgregarconComponent } from './Consulta/agregarcon/agregarcon.component';
import { EditarconComponent } from './Consulta/editarcon/editarcon.component';
import { ListarconComponent } from './Consulta/listarcon/listarcon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    ListarHospComponent,
    AgregarHospComponent,
    EditarHospComponent,
    AgregarpacComponent,
    EditarpacComponent,
    ListarpacComponent,
    AgregarconComponent,
    EditarconComponent,
    ListarconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    FormsModule,
    HttpClientModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxValidatorModule,
    DxNumberBoxModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
