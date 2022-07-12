import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoGeneroGuard implements CanActivate {
  public genre:any;

  constructor (
  ){}
   async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
        this.genre = localStorage.getItem("album_name");
       if(this.genre){
         return true;
        }

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debes tener un genero creado o seleccionado previamente para acceder a este apartado',
          showConfirmButton: false,
          timer: 2500
        })
  
        return false  ;
    
    
      }
  
}
