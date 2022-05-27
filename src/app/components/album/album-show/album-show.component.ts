import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/song';
import { SongService } from 'src/app/song.service';
@Component({
  selector: 'app-album-show',
  templateUrl: './album-show.component.html',
  styleUrls: ['./album-show.component.css']
})
export class AlbumShowComponent implements OnInit {

  Album: Album[];

  constructor(
    private songService: SongService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.songService.getList("albums").subscribe((res) =>{
      this.Album = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Album)
        };
      });
    });
  }

  getAlbumData(album){
    this.songService.getAlbumSongProperties(album);
    console.log("Propiedades del album seleccionado", album)
    this.router.navigate(['/createSong']);
    
  }

  redirect(){
    this.router.navigate(['/createAlbum']);
  }

}
