import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { ActivatedRoute,Router } from '@angular/router';
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
    private activeRoute: ActivatedRoute,
    private playlistService: PlaylistService,
    private router: Router
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
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
    this.router.navigate(['/createPlaylist', this.id])
  }
  favoritos(){
    this.router.navigate(['/showFavorites', this.id])
  }
  //obtener los campos de playlist
  getPlaylistProperties(playlist: Playlist){
    this.playlistService.getPlaylistProperties(playlist);
  }
  //obtiene los campos de la playlist
  addPlaylistSongs(playlist){
    this.playlistService.getPlaylistProperties(playlist);
    //redirige a la lista de canciones
    this.router.navigate(['/addPlaylistSongs',localStorage.getItem("idUser")]);
  }
}
