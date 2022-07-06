import { Component, OnInit } from '@angular/core';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //variables correo y contraseña
  email: string='';
  password: string= '';
  public userForm: FormGroup;
  public user: any;
  constructor(private auth: AuthService, 
    public formBuilder: FormBuilder, 
    private router : Router,
    public global: AppComponent) {
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
  //Método para Iniciar sesión
  async login(){
    //referencia al método del servicio para Iniciar sesión
    //verificación de algun error
    const res = await this.auth.login(this.userForm.value).catch(error =>{
      alert("Algun accidente ocurrió")
      console.log('error', error);
    })
   //en caso de que exista respuesta
    if(res){
        console.log("inicio exitoso");
        const path = "users";
        //asignación del id de Fireauthentication al id del formulario
        const id:string= res.user.uid;
        localStorage.setItem("id", id);
        console.log("id user: ", id)
        //impresión por consola de los datos del usuario registrado
        console.log("datos usuario", this.userForm.value)
        //creario usuario en Firestore
        await this.auth.getObject(id, path).subscribe( res =>{
          this.user = res;
          /*
          console.log("datos del usuario", this.user);
          this.auth.setUserProperties(this.user);
          console.log("global", this.global.title);
          this.global.getuserProperties(this.user.id, this.user.name, this.user.rol);
          console.log(this.global.print());*/
          if(this.user.rol == "no artist"){
            this.router.navigate(['/noArtist'])
          }
          else{
            this.router.navigate(['/userProfile', localStorage.getItem("id")])
          }
          
        })
      }
  }

}
