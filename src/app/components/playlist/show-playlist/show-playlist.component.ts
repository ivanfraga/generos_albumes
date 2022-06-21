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

  Playlist: Playlist[];

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.playlistService.showPlaylists().subscribe((res) =>{
      this.Playlist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Playlist)
        };
      });
    });
  }
  redirect(){
    this.router.navigate(['/createPlaylist'])
  }

  showPlaylistSongs(playlist){
    this.playlistService.getPlaylistSongProperties(playlist)
    this.router.navigate(['/showPlaylistSongs'])
  }

  updatePlaylist(playlist){
    this.playlistService.getPlaylistSongProperties(playlist)
    this.router.navigate(['/updatePlaylist'])
  }

  getPlaylistProperties(playlist: Playlist){
    this.playlistService.getPlaylistProperties(playlist);
  }


}
