import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-no-artist',
  templateUrl: './no-artist.component.html',
  styleUrls: ['./no-artist.component.css']
})
export class NoArtistComponent implements OnInit {

  constructor(private auth : AuthService,
    private zone: NgZone,) { }

  ngOnInit(): void {
    this.recargaProcess();
  }
  logout(){
    this.auth.logout();
  }
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }
  recargaProcess(){
    if(localStorage.getItem("recarga")==="true"){
      console.log("recarga");
      localStorage.setItem("recarga", "");
      this.reloadPage();
    }
    else{
      console.log("no recarga")
    }
  }

}
