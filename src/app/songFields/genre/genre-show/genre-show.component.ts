import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre } from 'src/app/song.model';
import { SongService } from 'src/app/song.service';



@Component({
  selector: 'app-genre-show',
  templateUrl: './genre-show.component.html',
  styleUrls: ['./genre-show.component.css']
})
export class GenreShowComponent implements OnInit {

  Genre: Genre[];

  constructor(private songService: SongService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.songService.getGenre().subscribe((res) =>{
      this.Genre = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
  }

  deleteRow = (genre) => this.songService.deleteGenre(genre);


}
