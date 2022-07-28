import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favorite-show-doc',
  templateUrl: './favorite-show-doc.component.html',
  styleUrls: ['./favorite-show-doc.component.css']
})
export class FavoriteShowDocComponent implements OnInit {

  constructor(public router:Router) { }
  public id=localStorage.getItem("idUser");
    
   

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }
  implementation(){
    if(this.id == null){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El usuario no esta autenticado, por favor inicie sesion',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/showFavorites', this.id]);
    
  }

}
