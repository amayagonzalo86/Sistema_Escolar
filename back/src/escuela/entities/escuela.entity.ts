import { Email } from "src/email/entities/email.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Escuela {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    provincia: string;

    @OneToMany(()=>Telefono,(telefonos)=>telefonos.escuela, { nullable : true })
    telefonos?: Telefono[];

    @OneToMany(()=>Email,(emails)=>emails.escuela, { nullable : true })
    emails?: Email[];




    constructor(nombre:string, direccion:string, telefono:string){

    }
}
