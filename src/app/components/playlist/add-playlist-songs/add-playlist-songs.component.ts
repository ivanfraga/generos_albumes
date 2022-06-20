import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';
import { Song } from 'src/app/song';

@Component({
  selector: 'app-add-playlist-songs',
  templateUrl: './add-playlist-songs.component.html',
  styleUrls: ['./add-playlist-songs.component.css']
})
export class AddPlaylistSongsComponent implements OnInit {

  Song: Song[];

  constructor(
    public playlistService: PlaylistService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.playlistService.getList("songs").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }

  getPlaylistData(playlist){
    this.playlistService.getPlaylistProperties()
  }

}
