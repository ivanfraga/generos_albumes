import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-no-artist',
  templateUrl: './no-artist.component.html',
  styleUrls: ['./no-artist.component.css']
})
export class NoArtistComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout();
  }

}
