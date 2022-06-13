import { Injectable } from '@angular/core';
//Importa biblioteca de Firebase Authentication
import { AngularFireAuth} from '@angular/fire/compat/auth'
//Importa biblioteca de Router 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //variables de Firebase Authenticación y router para acceder a sus métodos
  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //login method
  //Método para Acceder al sistema
  //Necesita parámetros: correo y contraseña 
  login(email : string, password : string) {
    //método de firebase para acceder al sistema mediante el correo y contraseña
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
      //habilitar token
        localStorage.setItem('token','true');
        //redieccionar al dashboard
          this.router.navigate(['dashboard']);
    }, err => {
        alert(err.message);
        //en caso de error recargar página de Inicio de sesión
        this.router.navigate(['/login']);
    })
  }

  //register method
  //Método para Registrarse en el sistema
  //Necesita parámetros: correo y contraseña
  register(email : string, password : string) {
    //método de firebase para registrarse en el sistema mediante el correo y contraseña
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      //redieccionar al Inicio de sesión
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      //en caso de error recargar página de Registro
      this.router.navigate(['/register']);
    })
  }

  //logout method
  //Método para Salir del sistema
  //No necesita parámetros
  logout(){
    //método de firebase para salir del sistema
    this.fireauth.signOut().then(()=>{
      //deshabilitar el token
      localStorage.removeItem('token');
      //redieccionar al Inicio de sesión
      this.router.navigate(['/login']);
    }, err=>{
      alert(err.message);

    })
  }

  //forgot password method
  //Método para reestablecer contraseña
  //Necesita parámetro: correo
  forgotPassword(email : string) {
    //método de firebase para reestablecer contraseña mediante correo
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      //redireccionar al dashboard
      this.router.navigate(['dashboard']);
    }, err => {
      alert('Something went wrong');
    })
}

}
