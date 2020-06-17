import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from 'src/app/Model/Hospital';
import { Doctor } from 'src/app/Model/Doctor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url= 'http://localhost:8080/hospitales';

  getHospitales(){
    return this.http.get<Hospital[]>(this.Url);
  }

  createHospital(hospital:Hospital){
    return this.http.post<Hospital>(this.Url, hospital);
  }

  getHospitalId(id:number){
    return this.http.get<Hospital>(this.Url+"/"+id);
  }

  updateHospital(hospital:Hospital){
    return this.http.put<Hospital>(this.Url+"/"+hospital.id, hospital);
  }

  deleteHospital(hospital:Hospital){
    return this.http.delete<Hospital>(this.Url+"/"+hospital.id)
  }

  UrlDoc= 'http://localhost:8080/doctores';
  

  getDoctores(){
    return this.http.get<Doctor[]>(this.UrlDoc);
  }
}
