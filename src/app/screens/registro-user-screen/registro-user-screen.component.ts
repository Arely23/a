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
  //Para contraseñas
  public hide_1: boolean = false;
  public hide_2: boolean = false;
  public inputType_1: string = 'password';
  public inputType_2: string = 'password';
  //Fecha
  public fechaSelect: string = "";

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

  //Funciones para password
  showPassword()
  {
    if(this.inputType_1 == 'password'){
      this.inputType_1 = 'text';
      this.hide_1 = true;
    }
    else{
      this.inputType_1 = 'password';
      this.hide_1 = false;
    }
  }

  showPwdConfirmar()
  {
    if(this.inputType_2 == 'password'){
      this.inputType_2 = 'text';
      this.hide_2 = true;
    }
    else{
      this.inputType_2 = 'password';
      this.hide_2 = false;
    }
  }

  //Para la fecha
  public changeFecha(event :any){
    console.log(event);
    this.user.fecha_nacimiento = event.value.toISOString().split("T")[0];
    console.log("Fecha: ", this.user.fecha_nacimiento);
    
  }
}
