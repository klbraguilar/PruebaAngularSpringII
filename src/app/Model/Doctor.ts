import { Hospital } from 'src/app/Model/Hospital';
export class Doctor{
    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    direccion: string;
    hospital: Hospital;
}