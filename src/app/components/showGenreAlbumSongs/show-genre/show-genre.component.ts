import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Genre } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-show-genre',
  templateUrl: './show-genre.component.html',
  styleUrls: ['./show-genre.component.css']
})
export class ShowGenreComponent implements OnInit {

  Genre: Genre[];//variable array de tipo Género

  constructor(
    private activeRoute: ActivatedRoute,
    private songService: SongService,//variable que hace referencia al servicio
    private router: Router// variable que hace referencia a un enlace en el APPROUTING
  ) { }

  public id=this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.songService.getList("genres").subscribe((res) =>{
      this.Genre = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
  }
  //método que obtiene los datos del género, cuando se selecciona uno
  //pasa como parámetro un género
  getSongs(genre){
    //referencia al método en el Sevicio
    this.songService.getGenreSongProperties(genre);
    //redireccionar a la página de mostrar canciones del género
    this.router.navigate(['/showGenreSongs', this.id]); 
  }
  //método para redireccionar a crear género
  getAlbums(){
    //referencia al método en el Sevicio
    this.router.navigate(['/showAlbums', this.id]);
  }
  canciones(){
    //const id = this.activeRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/selectFavorites', this.id]);
  }

}
