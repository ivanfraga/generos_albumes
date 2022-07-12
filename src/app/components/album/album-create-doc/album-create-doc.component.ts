import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-create-doc',
  templateUrl: './album-create-doc.component.html',
  styleUrls: ['./album-create-doc.component.css']
})
export class AlbumCreateDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
