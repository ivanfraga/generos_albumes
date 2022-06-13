import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/song';
import { SongService } from 'src/app/song.service';
@Component({
  selector: 'app-album-show',
  templateUrl: './album-show.component.html',
  styleUrls: ['./album-show.component.css']
})
export class AlbumShowComponent implements OnInit {

  Album: Album[];//variable array de tipo Album

  constructor(
    private songService: SongService, //variable que hace referencia al servicio
    public router: Router// variable que hace referencia a un enlace en el APPROUTING
  ) { }
    //método que obtiene e inicializa con todos los albumes
  ngOnInit(): void {
    this.songService.getList("albums").subscribe((res) =>{
      this.Album = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Album)
        };
      });
    });
  }

  //método que obtiene los datos del album, cuando se selecciona uno
  //pasa como parámetro un album
  getAlbumData(album){
    //referencia al método en el Sevicio
    this.songService.getAlbumSongProperties(album);
    console.log("Propiedades del album seleccionado", album)
    //redireccionar a la página de crear canción
    this.router.navigate(['/createSong']);
    
  }
  //método para redireccionar a crear álbum
  redirect(){
    this.router.navigate(['/createAlbum']);
  }

}
