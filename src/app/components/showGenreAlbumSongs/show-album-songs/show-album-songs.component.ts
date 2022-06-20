import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/song';//importar clase Canción
import { SongService } from 'src/app/song.service';//importar servicio

@Component({
  selector: 'app-show-album-songs',
  templateUrl: './show-album-songs.component.html',
  styleUrls: ['./show-album-songs.component.css']
})
export class ShowAlbumSongsComponent implements OnInit {
  //variable donde se almacena la lsita de canciones
  Song: Song[];

  constructor(
    private songService: SongService,
    private router: Router
  ) { }
  //método que inicializa las canciones dependiendo del álbum
  ngOnInit(): void {
    this.songService.getAlbumGenreSongs("albums").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }
  //método que redirecciona a la visualización de álbumes
  redirect(){
    this.router.navigate(['/showAlbums'])
  }
  //opcional
  //función para añadir a favoritos
  addToFavorite(song){
    this.songService.addToFavorite(song);
  }

}
