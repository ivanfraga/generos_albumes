import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song, Favorite } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-show-favorite',
  templateUrl: './show-favorite.component.html',
  styleUrls: ['./show-favorite.component.css']
})
export class ShowFavoriteComponent implements OnInit {

  Song: Song[];
  path= "/favorite/ DP3XfsWz0llXfYtU8UUO/songs";
  Favorite:Favorite[];
  idSong: any= "url";

  constructor(
    private songService: SongService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.songService.getList(this.path).subscribe(res =>{
      this.Favorite = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Favorite)
        };
      })
      console.log("FAVORITOS: \n", this.Favorite)
    })
    
  }

}
