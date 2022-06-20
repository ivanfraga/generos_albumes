import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'src/app/services/playlist.service';
//Formulario reactivo
import { Router } from '@angular/router';
import { Playlist, Song } from 'src/app/song';

@Component({
  selector: 'app-show-playlist-songs',
  templateUrl: './show-playlist-songs.component.html',
  styleUrls: ['./show-playlist-songs.component.css']
})
export class ShowPlaylistSongsComponent implements OnInit {

  Song: Song[];
  path= "/favorite/ DP3XfsWz0llXfYtU8UUO/songs";
  path2= "songs";
  playlist:Playlist[];
  playlistSongs=[];  

  constructor(
    private playlistService: PlaylistService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
