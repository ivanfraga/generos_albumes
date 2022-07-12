import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-select-doc',
  templateUrl: './favorite-select-doc.component.html',
  styleUrls: ['./favorite-select-doc.component.css']
})
export class FavoriteSelectDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
