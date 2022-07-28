import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { Router, ActivatedRoute } from '@angular/router';
import { Playlist, Song } from 'src/app/song';

@Component({
  selector: 'app-show-playlist-songs',
  templateUrl: './show-playlist-songs.component.html',
  styleUrls: ['./show-playlist-songs.component.css']
})
export class ShowPlaylistSongsComponent implements OnInit {
  //array canciones
  Song: Song[];
  
  playlistSongs: Song[];  
  //Objeto playlist
  playlist: any;
  //busqueda y paginación
  public page: number = 0;
  public search: string = '';
  public id=this.activeRoute.snapshot.paramMap.get('id');
  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }
  //función inicializadora de playlist por id
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    //obtiene el id de la playlist mediante la ruta
    const id = localStorage.getItem("idPlaylist");
    //obtiene la playlist correspondiente al id
    this.playlistService.getObject(id).subscribe( res =>{
      this.playlist = res;
      this.playlistService.getPlaylistProperties(this.playlist);
      this.getSongs();
    })

  }
  documentation(){
    this.router.navigate(['/showPlaylistSongsDoc']);
  }

  getSongs(){
    //obtiene canciones por medio de la lista de Ids de la playlist
    this.playlistService.getPlaylistById(this.playlist.playlist_collection).subscribe(res =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      })
    })
  }
  //redirecciónar a la lista de playlist
  showPlaylist(){
    this.router.navigate(['/showPlaylist', this.id]);
  }
  //eliminar canción de la playlist
  deleteSong(id: string){
    this.playlistService.deletePlaylistSong(id);
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
