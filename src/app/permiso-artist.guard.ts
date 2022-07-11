import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoArtistGuard implements CanActivate {
  public usuario:any;

  constructor (
  private afAuth : AngularFireAuth,private router : Router
  ){}
   async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
        this.usuario = localStorage.getItem('rolUser')
        const user = await this.afAuth.currentUser;
      

       if(this.usuario =="artist" ){
       
          
         return true;
        }

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'no tienes permisos ',
          showConfirmButton: false,
          timer: 1500
        })
  
        return false  ;
    
    
      }
  
}
