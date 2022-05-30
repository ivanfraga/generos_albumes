import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre, Favorite } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-genre-show',
  templateUrl: './genre-show.component.html',
  styleUrls: ['./genre-show.component.css']
})
export class GenreShowComponent implements OnInit {
  
  Genre: Genre[];
  
  
  constructor(
    private songService: SongService,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.songService.getList("genres").subscribe((res) =>{
      this.Genre = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
  }
  
  getGenreData(genre){
    this.songService.getGenreSongProperties(genre);
    this.router.navigate(['/showAlbum']);
    
    
  }
  redirect(){
    this.router.navigate(['/createGenre']);
  }

  

}