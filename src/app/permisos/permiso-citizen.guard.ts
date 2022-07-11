import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router , RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class PermisoCitizenGuard implements CanActivate {
  public usuario:any;

  constructor (
  private afAuth : AngularFireAuth,private router : Router
  ){}
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
      this.usuario = localStorage.getItem('rolUser')
      const user = await this.afAuth.currentUser;
    

     if(this.usuario =="citizen" ){
     
        
       return true;
      }

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'no tienes permisos',
        showConfirmButton: false,
        timer: 1500
      })

      return false  ;
  
  
    }
  
}
