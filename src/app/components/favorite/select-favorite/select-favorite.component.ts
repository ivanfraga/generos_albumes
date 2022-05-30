import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song, Favorite } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-select-favorite',
  templateUrl: './select-favorite.component.html',
  styleUrls: ['./select-favorite.component.css']
})
export class SelectFavoriteComponent implements OnInit {

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

  addToFavorite(song){
    this.songService.addToFavorite(song);
  }
  redirect(){
    this.router.navigate(['/showGenre'])
  }

  

}
