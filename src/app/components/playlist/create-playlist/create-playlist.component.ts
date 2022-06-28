import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Playlist } from 'src/app/song';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  Playlist: Playlist[];

  //Formulario reactivo
  public playlistForm: FormGroup;
   constructor(
    public playlistService: PlaylistService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    //campos que maneja un género
    this.playlistForm= this.formBuilder.group({
      playlist_name: [''],
      playlist_collection: [[]],
      id: null
    })
   }

  ngOnInit(): void {
    //inicialización de la lista de playlists
    this.playlistService.showPlaylists().subscribe((res) =>{
      this.Playlist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Playlist)
        };
      });
    });
  }
  //manda a crear a la playlist con los valores del formulario reactivo
  onSubmit(){
    //función del servicio para crear playlist
    this.playlistService.playlistCreate(this.playlistForm.value);
    //redirige a la lista de canciones
    this.router.navigate(['/addPlaylistSongs']);
    
  }
  //redirige a la lista de géneros
  redirect(){
    this.router.navigate(['/showGenre']);
  }
  //obtiene los campos de la playlist
  getPlaylistProperties(playlist){
    this.playlistService.getPlaylistProperties(playlist);
    //redirige a la lista de canciones
    this.router.navigate(['/addPlaylistSongs']);
  }

}
