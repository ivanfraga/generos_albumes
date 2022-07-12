import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-genre-songs-doc',
  templateUrl: './show-genre-songs-doc.component.html',
  styleUrls: ['./show-genre-songs-doc.component.css']
})
export class ShowGenreSongsDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
