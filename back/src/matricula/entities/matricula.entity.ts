import { Estudiante } from "src/estudiante/entities/estudiante.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matricula {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    folio: number;

    @Column()
    libro: string;

    @Column()
    estado: boolean;

    @OneToMany(()=>Estudiante,(estudiantes)=>estudiantes.matricula)
    estudiantes: Estudiante[];

    constructor(folio:number, libro:string){
        this.folio = folio;
        this.libro = libro;
        this.estado = true;
    }

    getFolio(): number{
        return this.folio;
    };

    setFolio(folio:number):void{
        this.folio = folio;
    };

    getLibro():string{
        return this.libro;
    };

    setLibro(libro:string):void{
        this.libro = libro;
    };

    getEstado():boolean{
        return this.estado;
    };

    setEstado(estado:boolean):void{
        this.estado = estado;
    };
}
