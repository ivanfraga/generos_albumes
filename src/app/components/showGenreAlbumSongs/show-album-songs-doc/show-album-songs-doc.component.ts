import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-album-songs-doc',
  templateUrl: './show-album-songs-doc.component.html',
  styleUrls: ['./show-album-songs-doc.component.css']
})
export class ShowAlbumSongsDocComponent implements OnInit {

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
    this.router.navigate(['/showAlbumSongs', this.id]);
    
  }

}
