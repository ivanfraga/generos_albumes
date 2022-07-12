import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-show-doc',
  templateUrl: './genre-show-doc.component.html',
  styleUrls: ['./genre-show-doc.component.css']
})
export class GenreShowDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
