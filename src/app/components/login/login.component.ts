import { Component, OnInit } from '@angular/core';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables correo y contraseña
  email: string='';
  password: string= '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  //Método para Iniciar sesión
  login(){
    //Verificación de campos vacios
    if (this.email == ''){
      alert('Empty email');
      return;
    }
    if (this.password == ''){
      alert('Empty password');
      return;
    }
    //referencia al método del servicio para Iniciar sesión
    this.auth.login(this.email, this.password);
    //Reseteo de variables
    this.email= '';
    this.password= '';

  }

}
