import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../Model/Doctor';
import { Hospital } from '../Model/Hospital';
import { Paciente } from '../Model/Paciente';
import { Consulta } from '../Model/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url= 'http://localhost:8080/doctores';
  

  getDoctores(){
    return this.http.get<Doctor[]>(this.Url);
  }

  createDoctor(id:number, doctor:Doctor){
    return this.http.post<Doctor>(this.Url+"/hosp/"+id+"/", doctor);
  }

  getDoctorId(id:number){
    return this.http.get<Doctor>(this.Url+"/"+id);
  }

  updateDoctor(doctor:Doctor){
    return this.http.put<Doctor>(this.Url+"/"+doctor.id, doctor);
  }

  deleteDoctor(doctor:Doctor){
    return this.http.delete<Doctor>(this.Url+"/"+doctor.id)
  }

  urlHospital = 'http://localhost:8080/hospitales'

  getHospitales(){
    return this.http.get<Hospital[]>(this.urlHospital);
  }
  //servicios paciente
  UrlPac= 'http://localhost:8080/pacientes';

  getPacientes(){
    return this.http.get<Paciente[]>(this.UrlPac);
  }

  createPaciente(paciente:Paciente){
    return this.http.post<Paciente>(this.UrlPac, paciente);
  }

  getPacienteId(id:number){
    return this.http.get<Paciente>(this.UrlPac+"/"+id);
  }

  updatePaciente(paciente:Paciente){
    return this.http.put<Paciente>(this.UrlPac+"/"+paciente.id, paciente);
  }

  deletePaciente(paciente:Paciente){
    return this.http.delete<Paciente>(this.UrlPac+"/"+paciente.id)
  }

  //servicios consulta
  UrlCons= 'http://localhost:8080/consultas';

  getConsultas(){
    return this.http.get<Consulta[]>(this.UrlCons);
  }

  createConsulta(idPac:number, idDoc:number, consulta:Consulta){
    return this.http.post<Consulta>(this.UrlCons+"/cons/"+idPac+"/"+idDoc, consulta);
  }

  getConsultaId(id:number){
    return this.http.get<Consulta>(this.UrlCons+"/"+id);
  }

  updateConsulta(consulta:Consulta){
    return this.http.put<Consulta>(this.UrlCons+"/"+consulta.id, consulta);
  }

  deleteConsulta(consulta:Consulta){
    return this.http.delete<Consulta>(this.UrlCons+"/"+consulta.id)
  }
}
