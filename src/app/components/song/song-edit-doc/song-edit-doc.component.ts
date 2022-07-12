import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-edit-doc',
  templateUrl: './song-edit-doc.component.html',
  styleUrls: ['./song-edit-doc.component.css']
})
export class SongEditDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
