import { Component, OnInit } from '@angular/core';
//importación del servicio
import { SongService } from 'src/app/song.service';
//Formularios reactvos
import { FormBuilder, FormGroup } from '@angular/forms';
//rutas
import { Router,ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  public songForm: FormGroup; //formulario reactivo
  public collectionName= "songs"
  isChanged = false;
  @ViewChild("file") file; //permite referenciar una instancia en HTML
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;

  constructor(
    private auth: AuthService,
    private activeRoute: ActivatedRoute,
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    //campos que maneja una canción
    this.songForm= this.formBuilder.group({
      genre_name:[''],
      album_name: [''],
      imageURL: [''],
      song_name: [''],
      author: [''],
      year:[''],
      songURL: [''],
      song_reference: [''],
      
      id: null
    })
   }
   public id=this.activeRoute.snapshot.paramMap.get('id');
  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.auth.rolVerification("artist");
  }

  onSubmit(){
    localStorage.setItem("recarga", "true");
    //Referencia a función del servicio para subir una canción
    this.songService.addGenreAlbum(this.songForm.value, this._file, this.collectionName);
    // una vez subida la canción, redirige a mostrar canciones del album 
    this.router.navigate(['/showSong', this.id]);
    //formatea las variables
    this.isChanged = false;
    this.file.nativeElement.value = "";
  }
  
  //función para transformar la canción subida a url local
  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();//lector de archivos
    //función para cargar imagen subida y presentarla al usuario
    reader.onload = () => {
      this.url = reader.result;
    };
    if (target.files.length > 0) {
      this._file = target.files[0];
      //asignación de url local a _file
      reader.readAsDataURL(this._file);
    }
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  redirect(){
    this.router.navigate(['/showAlbum', this.id]);
  }

  emptyFields(field: string){
    if (this.songForm.get(field)?.hasError('required')) {
      return 'El campo es obligatorio';
    }
   
    return this.songForm.get(field)? 'Formato incorrecto' : '';
  }

  get emptyName(){
    return this.songForm.get('song_name')?.invalid && this.songForm.get('song_name')?.touched
  }

}
