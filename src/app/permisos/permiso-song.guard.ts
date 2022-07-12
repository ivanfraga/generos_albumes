import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class PermisoSongGuard implements CanActivate {
  public song:any;

  constructor (
  ){}
   async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
        this.song = localStorage.getItem("song_name");
       if(this.song){
         return true;
        }

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debes tener una canción seleccionada previamente para acceder a este apartado',
          showConfirmButton: false,
          timer: 2500
        })
  
        return false  ;
    
    
      }
  
}
