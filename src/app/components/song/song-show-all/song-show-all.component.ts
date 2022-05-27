import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-song-show-all',
  templateUrl: './song-show-all.component.html',
  styleUrls: ['./song-show-all.component.css']
})
export class SongShowAllComponent implements OnInit {

  Song: Song[];

  constructor(
    private songService: SongService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.songService.getList("songs").subscribe((res) =>{
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

}
