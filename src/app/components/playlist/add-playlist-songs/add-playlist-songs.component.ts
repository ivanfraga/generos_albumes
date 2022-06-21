import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { PlaylistService } from 'src/app/services/playlist.service';
import { Router } from '@angular/router';
import { Song, Playlist } from 'src/app/song';


@Component({
  selector: 'app-add-playlist-songs',
  templateUrl: './add-playlist-songs.component.html',
  styleUrls: ['./add-playlist-songs.component.css']
})
export class AddPlaylistSongsComponent implements OnInit {

  Song: Song[];
  public isSearch= false;
  public busqueda="";
  public songList: string[] = [];

  constructor(
    public playlistService: PlaylistService,
    public router: Router
  ) { }



  ngOnInit(): void {
    //intento de busqueda
    if(this.isSearch){
      this.playlistService.getSongsSearch().subscribe((res) =>{
        this.Song = res.map((e) =>{
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Song)
          };
        });
      });
    }
    else{
      this.playlistService.getList("songs").subscribe((res) =>{
        this.Song = res.map((e) =>{
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Song)
          };
        });
      });
    }
    

    /*this.playlistService.getList("songs").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });*/
  }

  getPlaylistData(playlist){
    this.playlistService.getPlaylistProperties(playlist)
  }

  setSearch(busqueda: string){
    this.isSearch= true;
    this.playlistService.setSearch(busqueda);
    this.ngOnInit();
  }

  addSongPlaylist(id: string){
    
    this.songList.unshift(id);
    console.log("Canciones agredadas: ", this.songList)
  }

  onSubmit(){
    this.playlistService.addPlaylistSongs(this.songList);

  }

  showAllSongs(){
    this.isSearch= false;
    this.ngOnInit();
  }

}
