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

}
