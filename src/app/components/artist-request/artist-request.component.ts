import { Component, OnInit } from '@angular/core';
import { ArtistRequestService } from 'src/app/services/artist-request.service';
import { Artist } from 'src/app/song';



@Component({
  selector: 'app-artist-request',
  templateUrl: './artist-request.component.html',
  styleUrls: ['./artist-request.component.css']
})
export class ArtistRequestComponent implements OnInit {

  Artist: Artist[];
  NoArtist: Artist[];
  artist= 'artist'
  noArtist = 'no artist'

  constructor(private artistService: ArtistRequestService) { }

  ngOnInit(): void {
    
    this.artistService.getNoArtist().subscribe((res) =>{
      this.Artist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Artist)
        };
      });
    });
    
    
  }

  getArtist(){
    this.artistService.getArtist().subscribe((res) =>{
      this.NoArtist = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Artist)
        };
      });
    });
  }

  convertToArtist(artist: Artist){
    this.artistService.artistRol(artist)};

  convertToNoArtist(artist: Artist){
    this.artistService.noArtistRol(artist);
  } 

}
