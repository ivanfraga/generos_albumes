import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoGlobalGuard implements CanActivate {
  public usuario:any;

constructor (
private afAuth : AngularFireAuth,private router : Router
){}
 async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
      this.usuario = localStorage.getItem('idUser')
      const user = await this.afAuth.currentUser;
     const isAuthenticated = this.usuario? true:false;
     // const rol = this.angularfirstore.collection("artist",ref => ref.where('rol', '==', 'artista')) ? true:false;
     // estes es para saber si no esta autenticado se redirija en autentificacion. en el register
     if(!isAuthenticated ){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario no esta autenticado, por favor inicie sesion',
        showConfirmButton: false,
        timer: 1500
      })
        
        this.router.navigate(['register']);
      }

      return isAuthenticated  ;
  
  
    }
  }
