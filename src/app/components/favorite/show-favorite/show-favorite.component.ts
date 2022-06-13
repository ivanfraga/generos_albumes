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
  path2= "songs";
  Favorite:Favorite[];
  FavoriteSongs=[];
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
      
      this.mostrar();
    })
    //modificado
    
    
  }
  mostrar(){
    console.log("favoritos", this.Favorite)
    let songsId= [];
    for (let i = 0; i < this.Favorite.length; i++) {
      songsId.push(this.Favorite[i].id)
      
    }
    this.songService.getfavoriteById(this.path2, songsId).subscribe(res =>{
      this.FavoriteSongs = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      })
      
      console.log("FAVORITOS songs: \n", this.FavoriteSongs)
    })
  }

  quitFromFavorite(favorite){
    this.songService.removeFavorite(favorite.id);
  }
  

}
