import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-song-show',
  templateUrl: './song-show.component.html',
  styleUrls: ['./song-show.component.css']
})
export class SongShowComponent implements OnInit {

  Song: Song[];

  constructor(
    private songService: SongService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.songService.getAlbumSongs("canciones").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }

  deleteSong(song){
    this.songService.deleteSong(song)
  }  
  updateSong(id){
    this.router.navigate(['/updateSong/', id])
  }
  redirect(){
    this.router.navigate(['/showGenre'])
  }
  showAllSongs(){
    this.router.navigate(['/showAllSong'])
  }


}
