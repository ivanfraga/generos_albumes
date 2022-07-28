import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Importa Servicio
import { AuthService } from 'src/app/services/auth.service';
//importación de formulario reactivo
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  user: any;

  constructor(private auth: AuthService, private router: Router, public formBuilder: FormBuilder,) {
    //esecificación de los campos de usuario
    this.userForm= this.formBuilder.group({
      name: [''],
      birthdate: [''],
      mail: [''],
      password: new FormControl(this.password, [ Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,100}$") ]),
      rol: [''],
      imageURL: [''],
      image_reference: [''],
      id: null
    })
   }

  ngOnInit(): void {
    //borrar el almacenamiento interno

    //localStorage.clear();
    //localStorage.setItem("recarga", "true");
  }
  documentation(){
    this.router.navigate(['/registerDoc']);
  }
    //Método para Registrar
  async register(){
    
    //referencia al método del servicio para Registrar
    //verificación de algun error
    const res = await this.auth.register(this.userForm.value).catch(error =>{
      console.log("los datos del usuario son. ", this.userForm);
      alert("Registro incompleto")
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
      this.auth.createUser(this.userForm.value, path);
      
      this.auth.getObject(id, path).subscribe( res =>{
        //asignación del usuario
         this.user = res;
         console.log("usuario creado: ", this.user);
         //localstorage de datos del usuario: id, rol y nombre
         localStorage.setItem("idUser", this.user.id);
         localStorage.setItem("rolUser", this.user.rol);
         localStorage.setItem("nameUser", this.user.name);
         this.myAsyncFunction();
         
         
        
      })
      //redireccionar a la vista principal

    }

  }

  async delay(n: number){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
  }
  async  myAsyncFunction(){
    //Do what you want here 
    console.log("por fa espera")

    await this.delay(2);

    if(this.user.rol == "no artist"){
      this.router.navigate(['/noArtist'])
    }
    else{
      this.router.navigate(['/userProfile', localStorage.getItem("idUser")])
    }
  }
  artista(){
    this.userForm.patchValue({rol: "no artist"});
  }
  ciudadano(){
    this.userForm.patchValue({rol: "citizen"});
  }
  //función para redireccionar a login
  redirect(){
    this.router.navigate(['/login']);
  }
  //validaciones
  emptyFields(field: string){
    if (this.userForm.get(field)?.hasError('required')) {
      return 'El campo es obligatorio';
    }
   
    return this.userForm.get(field)? 'Formato incorrecto' : '';
  }
  emptypassword(field: string){
    if (this.userForm.get(field)?.hasError('required')) {
      return 'El campo es obligatorio';
    }
    return this.userForm.get(field)? 'La contraseña debe tener más de 8 caracteres con números y simbolos' : '';
  }
  emptyRol(field: string){
    
    return this.userForm.get(field)? 'Por favor seleccionar un rol' : '';
  }
  get emptyName(){
    return this.userForm.get('name')?.invalid && this.userForm.get('name')?.touched
  }
  get emptyPassword(){
    return this.userForm.get('password')?.invalid && this.userForm.get('password')?.touched
  }
  get emptyemail(){
    return this.userForm.get('mail')?.invalid && this.userForm.get('mail')?.touched
  }
  get emptybirthdate(){
    return this.userForm.get('birthdate')?.invalid && this.userForm.get('birthdate')?.touched
  }
  get emptyrol(){
    return this.userForm.get('rol')? true:false
  }
  
  

}
