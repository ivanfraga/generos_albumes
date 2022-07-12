import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-playlist-songs-doc',
  templateUrl: './show-playlist-songs-doc.component.html',
  styleUrls: ['./show-playlist-songs-doc.component.css']
})
export class ShowPlaylistSongsDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
