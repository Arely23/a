import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuariosService } from '../../services/usuarios.service';
declare var $:any;

@Component({
  selector: 'app-registro-user-screen',
  templateUrl: './registro-user-screen.component.html',
  styleUrls: ['./registro-user-screen.component.scss']
})
export class RegistroUserScreenComponent implements OnInit {
  public user: any = {};
  //Para validar
  public errors: any = {};

  constructor(
    private location: Location,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.user = this.usuariosService.getDefaultSchedule();
    console.log("Usuario: ", this.user);
  }

  public regresar(){
    this.location.back();
  }

  public registrar(){
     //Validar
     this.errors = [];

     this.errors = this.usuariosService.validarUsuario(this.user);
     if(!$.isEmptyObject(this.errors)){
       return false;
     }
  }
}
