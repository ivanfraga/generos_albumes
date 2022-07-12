import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-create-doc',
  templateUrl: './genre-create-doc.component.html',
  styleUrls: ['./genre-create-doc.component.css']
})
export class GenreCreateDocComponent implements OnInit {

  constructor() {
    localStorage.setItem("recarga", "true");
   }

  ngOnInit(): void {
  }

}
