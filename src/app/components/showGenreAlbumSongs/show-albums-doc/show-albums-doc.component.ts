import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-albums-doc',
  templateUrl: './show-albums-doc.component.html',
  styleUrls: ['./show-albums-doc.component.css']
})
export class ShowAlbumsDocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
  }

}
