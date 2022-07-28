import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-artist-request-doc',
  templateUrl: './artist-request-doc.component.html',
  styleUrls: ['./artist-request-doc.component.css']
})
export class ArtistRequestDocComponent implements OnInit {

  constructor(public router:Router) { }
  public id=localStorage.getItem("idUser");
  ngOnInit(): void {
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
    this.router.navigate(['/artistRequest', this.id]);
    
  }

}
