export class Paciente {
    uid:string|undefined
    nombre:string
    apellido:string
    edad:number
    dni:number
    obraSocial:string
    email:string
    password:string
    fotosPerfil:string[]
    perfil:string
    
    constructor(nombre:string='',apellido:string='',edad:number=0,dni:number=0,obraSocial:string='',email:string='',password:string='',fotos:string[]=[],perfil:string='Paciente',uid:string=''){
        this.uid=uid
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.dni=dni
        this.email=email
        this.password=password
        this.fotosPerfil=fotos
        this.obraSocial=obraSocial
        this.perfil = perfil
    }

}