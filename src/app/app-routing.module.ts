import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Doctor/listar/listar.component';
import { AgregarComponent } from './Doctor/agregar/agregar.component';
import { EditarComponent } from './Doctor/editar/editar.component';
import { EditarHospComponent } from './hospital/editar-hosp/editar-hosp.component';
import { ListarHospComponent } from './hospital/listar-hosp/listar-hosp.component';
import { AgregarHospComponent } from './hospital/agregar-hosp/agregar-hosp.component';
import { AgregarpacComponent } from './Paciente/agregarpac/agregarpac.component';
import { EditarpacComponent } from './Paciente/editarpac/editarpac.component';
import { ListarpacComponent } from './Paciente/listarpac/listarpac.component';
import { EditarconComponent } from './Consulta/editarcon/editarcon.component';
import { ListarconComponent } from './Consulta/listarcon/listarcon.component';
import { AgregarconComponent } from './Consulta/agregarcon/agregarcon.component';

const routes: Routes = [
  {path: '',   redirectTo: 'listarhosp', pathMatch: 'full'},
  {path: 'listar', component:ListarComponent},
  {path: 'agregar', component:AgregarComponent},
  {path: 'editar', component:EditarComponent},
  //Hospitales
  {path: 'editarhosp', component:EditarHospComponent},
  {path: 'listarhosp', component:ListarHospComponent},
  {path: 'agregarhosp', component:AgregarHospComponent},
  //Pacientes
  {path: 'editarpac', component:EditarpacComponent},
  {path: 'listarpac', component:ListarpacComponent},
  {path: 'agregarpac', component:AgregarpacComponent},
  //Consultas
  {path: 'editarcon', component:EditarconComponent},
  {path: 'listarcon', component:ListarconComponent},
  {path: 'agregarcon', component:AgregarconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
