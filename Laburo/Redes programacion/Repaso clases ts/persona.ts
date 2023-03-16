export class Persona {
    nombre: string;
    edad: number;

    constructor (nombre: string ,edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    getEdad(): number{
        return this.edad;
    }

    getNombre(): string{
        return this.nombre;
    }

    setEdad(edad: number){
        this.edad = edad;
    }

    setNombre(nombre: string){
        this.nombre = nombre;
    }
}