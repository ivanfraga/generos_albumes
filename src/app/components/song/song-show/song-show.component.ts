import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  public page: number = 0;
  public search: string = '';

  constructor(
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    private songService: SongService,
    public router: Router
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  //función para inicialzar las canciones correspondientes a al álbum creado
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.auth.rolVerification("artist");
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
  documentation(){
    this.router.navigate(['/showSongDoc']);
  }
  //función para eliminar canción
  //necesita parámetro: objeto canción
  deleteSong(song){
    this.songService.deleteSong(song)
  } 
  //función para actualizar canción
  //necesita parámetro: objeto canción 
  updateSong(song){
    localStorage.setItem("song_name", song.song_name);
    this.songService.getSongProperties(song);
  }
  //función para redirecciónar a géneros
  //no necesita parámetros
  redirect(){
    this.router.navigate(['/showGenre', this.id])
  }
  //función para redirecciónar a mostrar canciones
  //no necesita parámetros
  showAllSongs(){
    this.router.navigate(['/showAllSong', this.id])
  }
  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }

  searching( search: string ) {
    this.page = 0;
    this.search = search;
  }


}
