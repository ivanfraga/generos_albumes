import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-albums-doc',
  templateUrl: './show-albums-doc.component.html',
  styleUrls: ['./show-albums-doc.component.css']
})
export class ShowAlbumsDocComponent implements OnInit {

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
    this.router.navigate(['/showAlbums', this.id]);
    
  }

}
