import { Component, OnInit } from '@angular/core';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  //variable correo
  email:string= '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  //Método para reestablecer contraseña
  forgotPassword(){
    //referencia al método del servicio para reestablecer contraseña
    this.auth.forgotPassword(this.email);
    //reestablecer correo
    this.email= '';
  }

}
