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

  Song: Song[];
  path= "/favorite/ DP3XfsWz0llXfYtU8UUO/songs";
  path2= "songs";
  
  playlistSongs: Song[];  
  playlist: any;

  constructor(
    private playlistService: PlaylistService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.playlistService.getObject(id).subscribe( res =>{
      this.playlist = res;
      this.getSongs();
    })

  }

  getSongs(){
    this.playlistService.getPlaylistById(this.playlist.playlist_collection).subscribe(res =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      })
    })
  }

  showPlaylist(){
    this.router.navigate(['/showPlaylist']);
  }

  deleteSong(id: any){
    
  }

}
