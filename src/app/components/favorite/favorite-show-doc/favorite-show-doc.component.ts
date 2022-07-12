import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-show-doc',
  templateUrl: './favorite-show-doc.component.html',
  styleUrls: ['./favorite-show-doc.component.css']
})
export class FavoriteShowDocComponent implements OnInit {

  constructor() {
    localStorage.setItem("recarga", "true");
   }

  ngOnInit(): void {
  }

}
