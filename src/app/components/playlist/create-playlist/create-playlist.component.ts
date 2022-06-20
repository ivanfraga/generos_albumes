import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Song, Playlist } from 'src/app/song';

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  //FOrmulario reactivo
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
    /*this.playlistService.getList("songs").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });*/
  }

  onSubmit(){
    this.playlistService.playlistCreate(this.playlistForm.value);
    //this.router.navigate(['/showSong']);
    //this.playlistSongs= [];
  }

  redirect(){
    this.router.navigate(['/showGenre']);
  }

}
