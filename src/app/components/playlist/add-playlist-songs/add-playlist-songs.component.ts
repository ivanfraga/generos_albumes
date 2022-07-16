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
  //array para almacenar canciones
  Song: Song[];
  //booleano ue verifica si existe busqueda
  public isSearch= false;
  //busqueda 
  public busqueda="";
  //array para agregar los id de las canciones agregadas
  public songList: string[] = [];
  public id = localStorage.getItem("idUser");

  constructor(
    public playlistService: PlaylistService,
    public router: Router
  ) { }



  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    //mostrar resultados en caso de que exista busqueda
    if(this.isSearch){
      //obtener las canciones que coincidan con la busqueda
      this.playlistService.getSongsSearch().subscribe((res) =>{
        this.Song = res.map((e) =>{
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Song)
          };
        });
      });
    }
    //en caso de no existir busqueda, mostrar todas las canciones
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

  }
  //función para obtener los campos de la playlist 
  //necesita parámetros: objeto playlist
  getPlaylistData(playlist){
    this.playlistService.getPlaylistProperties(playlist)
  }
  //función para establecer la búsqueda
  //necesita parámetro: busqueda
  setSearch(busqueda: string){
    //cambio de estado de la busqueda
    this.isSearch= true;
    //obtener los resultados de la busqueda
    this.playlistService.setSearch(busqueda);
    //recargar el método inicializador
    this.ngOnInit();
  }
  //función para agregar id de las canciones seleccionadas
  //necesita parámetro: id de la canción
  addSongPlaylist(id: string){
    //unshift agrega el id al array songList
    this.songList.unshift(id);
    console.log("Canciones agredadas: ", this.songList)
  }
  //función para finalizar el proceso de agregar canciones
  //no necesita parámetros
  onSubmit(){
    //función del servicio para agregar la lista songlist
    this.playlistService.addPlaylistSongs(this.songList);
    console.log("Canciones agredadas: ", this.songList);
    this.router.navigate(['/showPlaylistSongs', this.id]);

  }
  //función para volver a mostrar todas las canciones
  //no necesita parámetros
  showAllSongs(){
    //cambio de estado de la búsqueda
    this.isSearch= false;
    //recargar el método inicializador
    this.router.navigate(['/selectFavorites', this.id]);
  }

}
