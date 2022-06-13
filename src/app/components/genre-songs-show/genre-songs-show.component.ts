import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitizenService } from 'src/app/services/citizen.service';
import { Genre } from 'src/app/song';

@Component({
  selector: 'app-genre-songs-show',
  templateUrl: './genre-songs-show.component.html',
  styleUrls: ['./genre-songs-show.component.css']
})
export class GenreSongsShowComponent implements OnInit {

  Genre: Genre[];

  constructor(
    private citizenService: CitizenService
  ) { }

  ngOnInit(): void {
    this.citizenService.getList("genres").subscribe((res) =>{
      this.Genre = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
  }

  getGenreData(genre){
    this.citizenService.getGenreSongProperties(genre);
  }

}
