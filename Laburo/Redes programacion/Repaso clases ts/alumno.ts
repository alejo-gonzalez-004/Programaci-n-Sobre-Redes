import { Persona } from "./persona";
import { Cursos } from "./cursos";
import * as Collections from 'typescript-collections';

export class Alumno extends Persona{
    promedioNotas: number;
    curso: Cursos
    materias: Collections.Set<string>;

    constructor (nombre: string, edad:  number, promedioNotas: number, curso: Cursos, materias: Collections.Set<string>){
        super(nombre, edad);
        this.promedioNotas = promedioNotas;
        this.curso = curso;
        this.materias = materias;
    }
    getPromedio(): number{
        return this.promedioNotas;
    }

    setPromedio(promedio: number){
        this.promedioNotas = promedio;
    }

    getCurso(): Cursos{
        return this.curso;
    }

    setCurso(curso: Cursos){
        this.curso = curso;
    }
    
    getMaterias(): Collections.Set<string>{
        return this.materias;
    }

    setMaterias(materias: Collections.Set<string>){
        this.materias = materias;
    }
}