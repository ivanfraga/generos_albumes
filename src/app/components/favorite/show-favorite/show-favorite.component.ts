import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Song, Favorite } from 'src/app/song';//importar clases referentes a favoritos y canciones
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-show-favorite',
  templateUrl: './show-favorite.component.html',
  styleUrls: ['./show-favorite.component.css']
})
export class ShowFavoriteComponent implements OnInit {

  //variables generales
  //array de canciones que va a obtener a partir de los IDs registrados
  Song: Song[];
  //dirección de favoritos
  path= "/favorite/ DP3XfsWz0llXfYtU8UUO/songs";
  //nombre de la colección de canciones
  path2= "songs";
  //array de favoritos registrados
  Favorite:Favorite[];
  //array de canciones pertenecientes a favoritos
  FavoriteSongs=[];
  idSong: any= "url";

  //variables que hacen referencia a :
  constructor(
    private activeRoute: ActivatedRoute,
    //servicio en donde se alojan los métodos genéricos
    private songService: SongService,
    //variable que ayuda a cambiar de ruta
    public router: Router
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    //Método que obtiene los IDs registrados en Favoritos
    this.songService.getList(this.path).subscribe(res =>{
      this.Favorite = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Favorite)
        };
      })
      
      this.mostrar();
    })
   
  }
  //método que obtiene la lista de IDs de Favoritos y carga canciones según los IDs
  mostrar(){
    
    let songsId= [];
    //ciclo for para obtener los IDs de favoritos en songsId
    for (let i = 0; i < this.Favorite.length; i++) {
      songsId.push(this.Favorite[i].id)
    }
    //segun el nombre de la colección de las canciones y la lista de IDs 
    //obtiene las canciones que coinciden con los IDs
    this.songService.getfavoriteById(this.path2, songsId).subscribe(res =>{
      this.FavoriteSongs = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      })
    })
  }
  //método que quita canciones de la lista de favoritos
  //necesita el parámetro: objeto de canción favorita
  quitFromFavorite(favorite){
    //referencia al método de servicio que elimina el documento segun el ID
    this.songService.removeFavorite(favorite.id);
  }
  redirect(){
    this.router.navigate(['/selectFavorites', this.id]);
  }

  playlist(){
    this.router.navigate(['/showPlaylist', this.id]);
  }

}
