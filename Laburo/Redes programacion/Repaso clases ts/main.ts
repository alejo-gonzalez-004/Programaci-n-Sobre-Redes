import { Alumno } from "./alumno";
import { Cursos } from "./cursos";
import * as Collections from 'typescript-collections';

let alumnoPrueba: Alumno;
let materiasAlumno = new Collections.Set<string>;
materiasAlumno.add("Lengua");
materiasAlumno.add("Matematica");
materiasAlumno.add("Geografia");
alumnoPrueba = new Alumno("Lucas", 14, 9.5, Cursos["A2"], materiasAlumno);

console.log("nombre: " + alumnoPrueba.nombre);
console.log("edad: " + alumnoPrueba.edad);
console.log("promedio: " + alumnoPrueba.promedioNotas);
console.log("curso: " + Cursos[alumnoPrueba.curso]);
console.log("materias: " + alumnoPrueba.materias);

