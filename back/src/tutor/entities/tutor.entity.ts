import { Email } from "src/email/entities/email.entity";
import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Genero } from "src/genero/entities/genero.entity";
import { Telefono } from "src/telefono/entities/telefono.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tutor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:300 })
    nombre: string;

    @Column({ length:300 })
    apellido: string;

    @Column()
    dni: number;

    @Column({ nullable: true })
    cuil_inicio: number;

    @Column({ nullable: true })
    cuil_dni: number;

    @Column({ nullable: true })
    cuil_fin: number;

    @Column('date',{ nullable: true })
    fechaNacimiento: Date;

    @Column({ nullable: true })
    ciudadOrigen: string;

    @Column({ nullable: true })
    provOrigen: string;

    @Column({ nullable: true })
    paisOrigen: string;

    @Column({ nullable: true })
    direccion: string;

    @Column()
    estado:boolean;

    
    @Column({ name:"fk_id_email", nullable : true })
    fk_id_email?: number;

    @Column({ name:"fk_id_genero" })
    fk_id_genero: number;

    @ManyToOne(()=>Genero, (genero)=>genero.tutores)
    @JoinColumn({ name: "fk_id_genero"})
    genero: Genero;

    @ManyToMany(()=>Estudiante,(estudiantes)=>estudiantes.tutores, { nullable : true })
    estudiantes?: Estudiante[];

    @OneToOne(() => Email, (email) => email.tutor, { nullable: true })
    @JoinColumn({ name: "fk_id_email"})
    email?: Email;

    @OneToMany(() => Telefono, (telefono) => telefono.tutor, { nullable: true })
    @JoinColumn({ name: "fk_id_telefono"})
    telefono?: Telefono;

    constructor(nombre:string,apellido:string,dni:number, cuil_inicio?:number, cuil_dni?:number, cuil_fin?:number, fechaNacimiento?:Date, ciudadOrigen?:string, provOrigen?:string, paisOrigen?:string,direccion?:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.cuil_inicio = cuil_inicio;
        this.cuil_dni = cuil_dni;
        this.cuil_fin = cuil_fin;
        this.fechaNacimiento = fechaNacimiento;
        this.ciudadOrigen = ciudadOrigen;
        this.provOrigen = provOrigen;
        this.paisOrigen = paisOrigen;
        this.direccion = direccion;
        this.estado = true;
    }

    setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setApellido(apellido:string):void{
        this.apellido = apellido;
    }

    getApellido():string{
        return this.apellido;
    }

    setDni(dni:number):void{
        this.dni = dni;
    }

    getDni():number{
        return this.dni;
    }

    setDireccion(direccion:string):void{
        this.direccion = direccion;
    }
    
    getciudadOrigen():string{
        return this.ciudadOrigen;
    }

    setCiudadOrigen(ciudadOrigen:string):void{
        this.ciudadOrigen = ciudadOrigen;
    };

    getProvOrigen():string{
        return this.provOrigen;
    }

    setProvOrigen(provOrigen:string):void{
        this.provOrigen = provOrigen;
    }

    getPaisOrigen():string{
        return this.paisOrigen;
    }

    setPaisOrigen(paisOrigen:string):void{
        this.paisOrigen = paisOrigen;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    }

    getEstado():boolean{
        return this.estado;
    };

    setCuil_inicio(cuil_inicio:number):void{
        this.cuil_inicio = cuil_inicio;
    }

    getCuil_inicio():number{
        return this.cuil_inicio;
    };

    setCuil_dni(cuil_dni:number):void{
        this.cuil_dni = cuil_dni;
    }

    getCuil_dni():number{
        return this.cuil_dni;
    };

    setCuil_fin(cuil_fin:number):void{
        this.cuil_fin = cuil_fin;
    }

    getCuil_fin():number{
        return this.cuil_fin;
    };

    setFechaNacimiento(fechaNacimiento:Date):void{
        this.fechaNacimiento = fechaNacimiento;
    }

    getFechaNacimiento():Date{
        return this.fechaNacimiento;
    };

    setGenero(genero:number):void{
        this.fk_id_genero = genero;
    }

    getGenero():number{
        return this.fk_id_genero;
    };
}