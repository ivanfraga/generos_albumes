import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-playlist-doc',
  templateUrl: './create-playlist-doc.component.html',
  styleUrls: ['./create-playlist-doc.component.css']
})
export class CreatePlaylistDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
