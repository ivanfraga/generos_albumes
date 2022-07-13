import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermisoPlaylistGuard implements CanActivate {
  public playlist:any;

  constructor (
  ){}
   async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  Promise<boolean | UrlTree> {
        this.playlist = localStorage.getItem("playlist_name");
      

       if(this.playlist){
         return true;
        }

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Debes tener una playlist creada o seleccionada previamente para acceder a este apartado',
          showConfirmButton: false,
          timer: 2500
        })
  
        return false  ;
    
    
      }
  
}
