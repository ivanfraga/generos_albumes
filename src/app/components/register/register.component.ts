import { Component, OnInit } from '@angular/core';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //variables correo y contraseña
  email: string= '';
  password: string= '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
    //Método para Registrar
  register(){
    //Verificación de campos vacios
    if (this.email == ''){
      alert('Empty email');
      return;
    }
    if (this.password == ''){
      alert('Empty password');
      return;
    }
    //referencia al método del servicio para Registrar
    this.auth.register(this.email, this.password);
    //Reseteo de variables
    this.email= '';
    this.password= '';

  }

}
