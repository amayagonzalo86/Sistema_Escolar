import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Tutor } from "src/tutor/entities/tutor.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    estado: boolean;

    @OneToMany(()=>Estudiante,(estudiantes)=>estudiantes.genero)
    estudiantes: Estudiante[];

    @OneToMany(()=>Tutor,(tutores)=>tutores.genero)
    tutores: Tutor[];   
  

    constructor (nombre: string) {
        this.nombre = nombre;
        this.estado = true;
    };

    setNombre(nombre:string):void {
        this.nombre = nombre;
    };

    getNombre():string {
        return this.nombre;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    };

    getEstado():boolean{
        return this.estado;
    };
}