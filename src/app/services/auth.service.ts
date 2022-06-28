import { Injectable } from '@angular/core';
//Importa biblioteca de Firebase Authentication
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
//Importa biblioteca de Router

import { Router } from '@angular/router';
import { User } from '../song';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //variables de Firebase Authenticación y router para acceder a sus métodos
  constructor(private fireauth: AngularFireAuth, 
    private router: Router, 
    private firestore: AngularFirestore,
    private storage: AngularFireStorage) { }
  //variables genéricas
  public id: string;
  public birthdate: string;
  public mail: string;
  public name: string;
  public password: string;
  public rol: string;
  public imageURL: string;
  public image_reference: string;
  //Obtener playlist específica
  //necesita parámetros: id de la playlist
  getObject( id: string, path: string){
    
    //obtiene playlist segun el id
    return this.firestore//accede a Firestore
    .collection(path)//especifica la colección
    .doc(id)//especifica el documento
    .valueChanges()//obtiene el documento
  }
  //login method
  //Método para Acceder al sistema
  //Necesita parámetros: correo y contraseña 
  login(user: User) {
    //método de firebase para acceder al sistema mediante el correo y contraseña
    return this.fireauth.signInWithEmailAndPassword(user.mail,user.password);
    
  }

  //register method
  //Función para Registrarse en el sistema
  //Necesita parámetros: objeto usuario
  register(user: User) {
    //método de firebase para registrarse en el sistema mediante el correo y contraseña
    
    console.log("user value: ", user)
    //método de firebase para registrarse en el sistema mediante el correo y contraseña
    return this.fireauth.createUserWithEmailAndPassword(user.mail, user.password)
  }
  //Función para crear usuario en firestore
  //Necesita parámetros: objeto usuario, dirección de la colección
  createUser(user: User, path: string){
    //ubica segun la dirección en la colección correspondiente
    this.firestore.collection(path)
    //crea segun la id registrada en direauthentication
    .doc(user.id)
    //establece al usuario segun los campos de usuario
    .set({id: user.id,
    mail: user.mail,
    password: user.password,
    name: user.name,
    birthdate: user.birthdate,
    rol: user.rol,
    imageURL: user.imageURL,
    image_reference: user.image_reference,
    });
  
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
  setUserProperties(user: User){
    this.id= user.id;
    this.birthdate= user.birthdate;
    this.mail= user.mail;
    this.name= user.name;
    this.password= user.password;
    this.rol= user.rol;
    this.imageURL= user.imageURL;
    this.image_reference= user.image_reference;
    console.log("id ususario: ", this.id)
  }
  getuserProperties(){
    console.log("nombre user: ", this.name)
    /*
    let usuario: User;
    usuario.birthdate= this.birthdate;
    usuario.id= this.id;
    usuario.mail= this.mail;
    usuario.name= this.name;
    usuario.password= this.password;
    usuario.rol= this.rol;
    usuario.imageURL= this.imageURL;
    usuario.image_reference= this.image_reference;
    console.log("valores obtenidos: ", usuario)
    //return usuario;*/
  }
  //función para actualizar canción
  //necesita parámetros: objeto canción, url, referencia en FireStorage
  updateUser(object: any, url: any, path: any, id: any){
    
    return this.firestore.collection("users")
    //crea segun la id registrada en direauthentication
    .doc(id)
      //actualización de los siguientes campos de la canción
      .update({
        name: object.name,
        imageURL : url,
        image_reference: path
    })
    

  }
  updateUserProcess(object: any, _file: any,isChanged:boolean, id:any){
    //función para obtener url de la canción actualizada
  //necesita parámetros: objeto canciones, archivo, nombre de colección, boolean, id
  
    //verifica si hubo cambio de archivo canción
    if(isChanged){
      const filePath = id+ "/" + object.name;
      const ref = this.storage.ref(filePath);
      console.log("el path hasta aquí si sirve")
      ref.put(_file).then(() => {
        ref.getDownloadURL().subscribe(url => {
          if (object.image_reference !== ''){
          this.storage.ref(object.image_reference).delete();}
          this.updateUser(object, url, filePath, id)
        })
      });
    }
    //si no hubo cambio de archivo canción se llama a función de actualizar canción
    else{
      this.updateUser(object, object.imageURL, object.image_reference, id)
    }
  
  }
  

}
