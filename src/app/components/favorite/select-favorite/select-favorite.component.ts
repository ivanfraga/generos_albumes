import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Song } from 'src/app/song';//importar clase de canción
import { SongService } from 'src/app/song.service';//importar servicio

@Component({
  selector: 'app-select-favorite',
  templateUrl: './select-favorite.component.html',
  styleUrls: ['./select-favorite.component.css']
})
export class SelectFavoriteComponent implements OnInit {
  //array que contendrá las canciones
  Song: Song[];
  constructor(
    private activeRoute: ActivatedRoute,
    private songService: SongService,
    public router: Router
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  //método que trae los documentos canciones de la colección songs  
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.songService.getList("songs").subscribe((res) =>{
      this.Song = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Song)
        };
      });
    });
  }
  //método agrega canciones a la lista de favoritos
  addToFavorite(song){
    //referencia al método en el servicio que agrega
    //a la canción seleccionada a la lista de favoritos
    this.songService.addToFavorite(song);
  }
  //método que redirecciona a la visualización de géneros
  redirect(){
    this.router.navigate(['/showGenres',this.id])
  }
  profile(){
    this.router.navigate(['/userProfile',this.id])
  }
}
