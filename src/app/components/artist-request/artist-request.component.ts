import { Component, OnInit } from '@angular/core';
//importar servicio
import { ArtistRequestService } from 'src/app/services/artist-request.service';
import { Artist } from 'src/app/song';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-artist-request',
  templateUrl: './artist-request.component.html',
  styleUrls: ['./artist-request.component.css']
})
export class ArtistRequestComponent implements OnInit {
  //array de artistas
  Artist: Artist[];
  //array de no artistas
  NoArtist: Artist[];
  artist= 'artist'
  noArtist = 'no artist'

  constructor(
    private auth : AuthService,
    private artistService: ArtistRequestService,
     private router: Router,
     private activeRoute: ActivatedRoute,) { }
  //función inicializadora
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.auth.rolVerification("admin");
    this.getArtist()
    //obtiene los no artistas
    this.artistService.getNoArtist().subscribe((res) =>{
      //asignación de los no artistas
      this.Artist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Artist)
        };
      });
    });
    
    
  }

  getArtist(){
    //obtiene los artistas
    this.artistService.getArtist().subscribe((res) =>{
      //asignación de artistas
      this.NoArtist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Artist)
        };
      });
    });
  }
  //función para cambiar de rol a artista
  //necesita parámetro: objeto artista
  convertToArtist(artist: Artist){
    this.artistService.artistRol(artist)};

  convertToNoArtist(artist: Artist){
    this.artistService.noArtistRol(artist);
  } 
  profile(){
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/userProfile', id]);
  }

}
