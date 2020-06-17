import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'med';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(['listar'])
  }

  Nuevo() {
    this.router.navigate(['agregar'])
  }

  ListarHospitales(){
    this.router.navigate(['listarhosp'])
  }

  NuevoHospital() {
    this.router.navigate(['agregarhosp'])
  }

  ListarPacientes(){
    this.router.navigate(['listarpac'])
  }

  NuevoPaciente() {
    this.router.navigate(['agregarpac'])
  }

  ListarConsultas(){
    this.router.navigate(['listarcon'])
  }

  NuevaConsulta() {
    this.router.navigate(['agregarcon'])
  }
}
