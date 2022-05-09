import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/song.model';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-album-show',
  templateUrl: './album-show.component.html',
  styleUrls: ['./album-show.component.css']
})
export class AlbumShowComponent implements OnInit {

  Album: Album[];

  constructor(private songService: SongService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.songService.getAlbum().subscribe((res) =>{
      this.Album = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Album)
        };
      });
    });
  }

  deleteRow = (album) => this.songService.deleteAlbum(album);


}
