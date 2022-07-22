import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Song } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-song-show-all',
  templateUrl: './song-show-all.component.html',
  styleUrls: ['./song-show-all.component.css']
})
export class SongShowAllComponent implements OnInit {

  Song: Song[];
  public page: number = 0;
  public search: string = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private songService: SongService,
    public router: Router,
    public global: AppComponent
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.songService.getUserAllSongs().subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }

  deleteSong(song){
    this.songService.deleteSong(song);
  }  
  updateSong(song){
    this.songService.getSongProperties(song);
  }

  redirect(){
    this.router.navigate(['/showGenre', this.id])
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }

  searching( search: string ) {
    this.page = 0;
    this.search = search;
  }
}
