import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { Router } from '@angular/router';
import { Playlist } from 'src/app/song';

@Component({
  selector: 'app-show-playlist',
  templateUrl: './show-playlist.component.html',
  styleUrls: ['./show-playlist.component.css']
})
export class ShowPlaylistComponent implements OnInit {
  //lista de playlist
  Playlist: Playlist[];

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //inicializar playlists
    this.playlistService.showPlaylists().subscribe((res) =>{
      this.Playlist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Playlist)
        };
      });
    });
  }
  //redireccionar a crear playlist
  redirect(){
    this.router.navigate(['/createPlaylist'])
  }
  //obtener los campos de playlist
  getPlaylistProperties(playlist: Playlist){
    this.playlistService.getPlaylistProperties(playlist);
  }
}
