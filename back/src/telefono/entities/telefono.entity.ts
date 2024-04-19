import { Escuela } from "src/escuela/entities/escuela.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Tutor } from "src/tutor/entities/tutor.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Telefono {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    codigoPais: number;

    @Column()
    codigoArea: number;

    @Column()
    numero: number;

    @Column()
    estado: boolean;

    @Column({ name:"fk_id_escuela",  nullable : true  })
    fk_id_escuela?: number;

    @Column({ name:"fk_id_tutor",  nullable : true })
    fk_id_tutor?: number;

    @OneToOne(()=>Estudiante, (estudiante)=>estudiante.telefono, { nullable : true })
    @JoinColumn({ name: "fk_id_estudiante"})
    estudiante?: Estudiante;

    @ManyToOne(()=>Tutor, (tutor)=>tutor.telefono, { nullable : true })
    @JoinColumn({ name: "fk_id_tutor"})
    tutor?: Tutor;

    @ManyToOne(()=>Escuela, (escuela)=>escuela.telefonos, { nullable : true })
    @JoinColumn({ name: "fk_id_escuela"})
    escuela?: Escuela;


    constructor(codigoPais:number, codigoArea:number, numbero:number){
        this.codigoPais = codigoPais;
        this.codigoArea = codigoArea;
        this.numero = numbero;
        this.estado = true;
    };

    getCodigoPais():number{
        return this.codigoPais;
    };

    setCodigoPais(codigoPais:number):void{
        this.codigoPais = codigoPais;
    };

    getCodigoArea():number{
        return this.codigoArea;
    };

    setCodigoArea(codigoArea:number):void{
        this.codigoArea = codigoArea;
    };

    getNumbero():number{
        return this.numero;
    };

    setNumero(numero:number):void{
        this.numero = numero;
    };

    getEstado():boolean{
        return this.estado;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    };
};