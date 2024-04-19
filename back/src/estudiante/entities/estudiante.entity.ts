import { Email } from "src/email/entities/email.entity";
import { Genero } from "src/genero/entities/genero.entity";
import { Matricula } from "src/matricula/entities/matricula.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
import { Tutor } from "src/tutor/entities/tutor.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
 
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    apellido: string;

    @Column()
    nombre: string;

    @Column('date', { nullable : true })
    fechaNacimiento?: Date;

    @Column()
    dni: number;

    @Column({ nullable : true })
    cuilInicio?: number;

    @Column({ nullable : true })
    cuilDni?: number;

    @Column({ nullable : true })
    cuilFin?: number;

    @Column({ nullable : true })
    direccion?: string;

    @Column({ nullable : true })
    provincia?: string;

    @Column({ nullable : true })
    pais?: string;

    @Column({ name:"fk_id_genero" })
    fk_id_genero: number;

    @Column({ name:"fk_id_email",  nullable : true  })
    fk_id_email?: number;

    @Column({ name:"fk_id_matricula", nullable : true  })
    fk_id_matricula?: number;

    @Column({ name:"fk_id_telefono",  nullable : true })
    fk_id_telefono?: number;

    @Column()
    estado: boolean;

    @ManyToMany(()=> Tutor, (tutores) =>tutores.estudiantes, { nullable : true })
    @JoinTable({
        name: "estudiante_tutor",
        joinColumns: [{ name: "id_estudiante" }], // Nombre del campo de la tabla actual (Estudiante)
        inverseJoinColumns: [{ name: "id_tutor" }], // Cambia el nombre del campo del Tutor
      })
    tutores?: Tutor[];

    @OneToOne(()=>Telefono,(telefono)=>telefono.estudiante, { nullable : true })
    @JoinColumn({ name: "fk_id_telefono"})
    telefono?: Telefono;

    @ManyToOne(()=>Genero, (genero)=>genero.estudiantes)
    @JoinColumn({ name: "fk_id_genero"})
    genero: Genero;

    @ManyToOne(()=>Matricula, (matricula)=>matricula.estudiantes, { nullable : true })
    @JoinColumn({ name: "fk_id_matricula"})
    matricula?: Matricula;

    @OneToOne(() => Email, (email) => email.estudiante, { nullable : true })
    @JoinColumn({ name: "fk_id_email"})
    email?: Email;

    constructor(apellido:string, nombre:string, fechaNacimiento:Date, dni:number, cuilInicio:number, cuilDni:number, cuilFin:number, provincia:string, pais:string, direccion?:string){
        this.apellido = apellido;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.cuilInicio = cuilInicio;
        this.cuilDni = cuilDni;
        this.cuilFin = cuilFin;
        this.direccion = direccion;
        this.provincia = provincia;
        this.pais = pais;
        this.estado = true;
    };

    getApellido():string{
        return this.apellido;
    };

    setApellido(apellido:string):void{
        this.apellido = apellido;
    };

    getNombre():string{
        return this.nombre;
    };

    setNombre(nombre:string):void{
        this.nombre = nombre;
    };

    getFechaNavimiento():Date{
        return this.fechaNacimiento;
    };

    setFechaNacimiento(fechaNacimiento:Date):void{
        this.fechaNacimiento = fechaNacimiento;
    };

    getDni():number{
        return this.dni;
    };

    setDni(dni:number):void{
        this.dni = dni;
    };

    getCuilInicio():number{
        return this.cuilInicio;
    };

    setCuilInicio(cuilInicio:number):void{
        this.cuilInicio = cuilInicio;
    };

    getCuilDni():number{
        return this.cuilDni;
    };

    setCuilDni(cuilDni:number):void{
        this.cuilDni = cuilDni;
    };

    getCuilFin():number{
        return this.cuilFin;
    };

    setCuilFin(cuilFin:number):void{
        this.cuilFin = cuilFin;
    };

    setGenero(genero:number):void{
        this.fk_id_genero = genero;
    }

    getGenero():number{
        return this.fk_id_genero;
    }

    setMatricula(matricula:number):void{
        this.fk_id_matricula = matricula;
    }

    getMatricula():number{
        return this.fk_id_matricula;
    }

    getDireccion():string{
        return this.direccion;
    };

    setDireccion(direccion:string):void{
        this.direccion = direccion;
    };

    getProvincia():string{
        return this.provincia;
    };

    setProvincia(provincia:string):void{
        this.provincia = provincia;
    };

    getPais():string{
        return this.pais;
    };

    setPais(pais:string):void{
        this.pais = pais;
    };

    getEstado():boolean{
        return this.estado;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    };
}