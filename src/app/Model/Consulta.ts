import { Doctor } from 'src/app/Model/Doctor';
import { Paciente } from './Paciente';
export class Consulta{
    id:number;
    descripcion: string;
    fecha: Date;
    paciente: Paciente;
    doctor: Doctor;
}