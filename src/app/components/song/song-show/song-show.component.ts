import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//importamos la clase canción
import { Song } from 'src/app/song';
//importamos el servicio
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit {
  //colección para guardar canciones
  Song: Song[];

  constructor(
    private songService: SongService,
    public router: Router
  ) { }
  //función para inicialzar las canciones correspondientes a al álbum creado
  ngOnInit(): void {
    this.songService.getAlbumSongs("songs").subscribe((res) =>{
      //asignación de las canciones
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }
  //función para eliminar canción
  //necesita parámetro: objeto canción
  deleteSong(song){
    this.songService.deleteSong(song)
  } 
  //función para actualizar canción
  //necesita parámetro: objeto canción 
  updateSong(song){
    this.songService.getSongProperties(song);
  }
  //función para redirecciónar a géneros
  //no necesita parámetros
  redirect(){
    this.router.navigate(['/showGenre'])
  }
  //función para redirecciónar a mostrar canciones
  //no necesita parámetros
  showAllSongs(){
    this.router.navigate(['/showAllSong'])
  }


}
