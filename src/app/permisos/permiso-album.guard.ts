import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoAlbumGuard implements CanActivate {
  public album:any;

  constructor (
  ){}
   async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
        this.album = localStorage.getItem("album_name")
      

       if(this.album){
         return true;
        }

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debes tener un album creado o seleccionado previamente para acceder a este apartado',
          showConfirmButton: false,
          timer: 2500
        })
  
        return false  ;
    
    
      }
  
}
