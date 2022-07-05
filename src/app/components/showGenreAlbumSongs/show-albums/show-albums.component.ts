import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Album } from 'src/app/song';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-show-albums',
  templateUrl: './show-albums.component.html',
  styleUrls: ['./show-albums.component.css']
})
export class ShowAlbumsComponent implements OnInit {

  Album: Album[];//variable array de tipo Album

  constructor(
    private activeRoute: ActivatedRoute,
    private songService: SongService, //variable que hace referencia al servicio
    public router: Router// variable que hace referencia a un enlace en el APPROUTING
  ) { }
  public id=this.activeRoute.snapshot.paramMap.get('id');
  //método que obtiene e inicializa con todos los albumes
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

    //método que obtiene los datos del album, cuando se selecciona uno
  //pasa como parámetro un album
  getAlbumData(album){
    //referencia al método en el Sevicio
    this.songService.getAlbumSongProperties(album);
    console.log("Propiedades del album seleccionado", album);
    //
    //redireccionar a la página de crear canción
    this.router.navigate(['/showAlbumSongs', this.id]);
    
  }
  //método para redireccionar a crear álbum
  redirect(){
    this.router.navigate(['/showGenres', this.id]);
  }
}
