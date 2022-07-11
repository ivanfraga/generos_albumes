import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
    private auth: AuthService,
    private songService: SongService,//variable que hace referencia al servicio
    private router: Router,// variable que hace referencia a un enlace en el APPROUTING
    ) { }
    public id=localStorage.getItem("idUser");
    //método que obtiene e inicializa con todos los Géneros
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.auth.rolVerification("artist");
      this.songService.getGenres("genres").subscribe((res) =>{
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
    console.log("nombre del género: ",localStorage.getItem("genreName"));
    //redireccionar a la página de mostrar álbumes
    this.router.navigate(['/showAlbum', this.id]); 
  }
  //método para redireccionar a crear género
  redirect(){
    this.router.navigate(['/createGenre', this.id]);
  }

  profile(){
    this.router.navigate(['/userProfile', this.id]);
  }
}