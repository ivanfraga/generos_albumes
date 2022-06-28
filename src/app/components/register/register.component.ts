import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';
//importación de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //variables correo y contraseña
  email: string= '';
  password: string= '';
  //formulario de usuario
  public userForm: FormGroup;

  constructor(private auth: AuthService, private router: Router, public formBuilder: FormBuilder,) {
    //esecificación de los campos de usuario
    this.userForm= this.formBuilder.group({
      name: [''],
      birthdate: [''],
      mail: [''],
      password: [''],
      rol: [''],
      imageURL: [''],
      image_reference: [''],
      id: null
    })
   }

  ngOnInit(): void {
  }
    //Método para Registrar
  async register(){
    
    //referencia al método del servicio para Registrar
    //verificación de algun error
    const res = await this.auth.register(this.userForm.value).catch(error =>{
      alert("Algun accidente ocurrió")
      console.log('error', error);
    })
    //en caso de que exista respuesta
    if(res){
      console.log("Registro en FireAuthentication completo");
      const path = "users";
      //asignación del id de Fireauthentication al id del formulario
      const id= res.user.uid;
      this.userForm.patchValue({id: id});
      this.userForm.patchValue({imageURL: 'http://www.4x4.ec/overlandecuador/wp-content/uploads/2017/06/default-user-icon-8.jpg'});
      //impresión por consola de los datos del usuario registrado
      console.log("datos usuario", this.userForm.value)
      //creario usuario en Firestore
      await this.auth.createUser(this.userForm.value, path);
      //redireccionar a la vista principal
      this.router.navigate(['/showAllSong'])

    }

  }
  artista(){
    this.userForm.patchValue({rol: "artista"});
  }
  ciudadano(){
    this.userForm.patchValue({rol: "ciudadano"});
  }
  //función para redireccionar a login
  redirect(){
    this.router.navigate(['/login']);
  }

}
