import { Escuela } from "src/escuela/entities/escuela.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Tutor } from "src/tutor/entities/tutor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Email {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    estado: boolean;

    @Column()
    fk_id_escuela?: number;

    @OneToOne(() => Estudiante, (estudiante) => estudiante.email, { nullable : true })
    estudiante?: Estudiante;

    @OneToOne(() => Tutor, (tutor) => tutor.email, { nullable : true })
    tutor?: Tutor;

    @ManyToOne(()=>Escuela, (escuela)=>escuela.emails, { nullable : true })
    @JoinColumn({ name: "fk_id_escuela"})
    escuela?: Escuela;

    constructor(nombre:string){
        this.nombre = nombre;
        this.estado = true;
    };

    getNombre():string{
        return this.nombre;
    };

    setNombre(nombre:string):void{
        this.nombre = nombre;
    };

    getEstado():boolean{
        return this.estado;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    };
};