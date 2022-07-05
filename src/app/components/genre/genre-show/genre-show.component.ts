import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Genre } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-genre-show',
  templateUrl: './genre-show.component.html',
  styleUrls: ['./genre-show.component.css']
})
export class GenreShowComponent implements OnInit {
  
  Genre: Genre[];//variable array de tipo Género
  
  
  constructor(
    private songService: SongService,//variable que hace referencia al servicio
    private router: Router,// variable que hace referencia a un enlace en el APPROUTING
    private activeRoute: ActivatedRoute,
    ) { }
    public id=this.activeRoute.snapshot.paramMap.get('id');
    //método que obtiene e inicializa con todos los Géneros
  ngOnInit(): void {
    this.songService.getList("genres").subscribe((res) =>{
      this.Genre = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
  }
    //método que obtiene los datos del album, cuando se selecciona uno
  //pasa como parámetro un género
  getGenreData(genre){
    //referencia al método en el Sevicio
    this.songService.getGenreSongProperties(genre);
    //redireccionar a la página de mostrar álbumes
    this.router.navigate(['/showAlbum', this.id]); 
  }
  //método para redireccionar a crear género
  redirect(){
    this.router.navigate(['/createGenre', this.id]);
  }

  profile(){
    //const id = this.activeRoute.snapshot.paramMap.get('id');
    this.router.navigate(['/userProfile', this.id]);
  }
}