import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { Song } from 'src/app/song';//importar clase Canción
import { SongService } from 'src/app/song.service';//importar servicio

@Component({
  selector: 'app-show-genre-songs',
  templateUrl: './show-genre-songs.component.html',
  styleUrls: ['./show-genre-songs.component.css']
})
export class ShowGenreSongsComponent implements OnInit {
  //variable donde se almacena la lsita de canciones
  Song: Song[];
  constructor(
    private activeRoute: ActivatedRoute,
    private songService: SongService,
    private router: Router
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  //método que inicializa las canciones dependiendo del género
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.songService.getAlbumGenreSongs("genres").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }
  //método que redirecciona a la visualización de géneros
  redirect(){
    this.router.navigate(['/showGenres', this.id]);
  }
  //opcional
  //función para añadir a favoritos
  addToFavorite(song){
    this.songService.addToFavorite(song);
  }

  favoritos(){
    this.router.navigate(['/showFavorites', this.id]);
  }

}
