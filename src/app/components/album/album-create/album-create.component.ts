import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service'; //Servicio en donde estan los métodos genéricos
import { FormBuilder, FormGroup } from '@angular/forms'; //Formulario reactivo
import { Router,ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  public albumForm: FormGroup; //formulario reactivo
  public collectionName= "albumes" //nombre de colleción creada en firebase
  isChanged = false; 
  @ViewChild("file") file; //permite referenciar una instancia en HTML
  files: Set<File> = new Set(); 
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg"; //imagen por defecto
  _file;

  constructor(
    private activeRoute: ActivatedRoute,
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    //campos que maneja un álbum 
    this.albumForm= this.formBuilder.group({
      genre_name:[''],
      name: [''],
      author: [''],
      year:[''],
      image_reference: [''],
      imageURL: [''],
      id: null
    })
   }
   public id=this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
  }

  onSubmit(){
    //Referencia a función del servicio para crear album
    this.songService.addGenreAlbum(this.albumForm.value, this._file, this.collectionName);//envia como parámetros: valores del album reactivo, imagen local, nombre de la colección
    //Obtiene datos necesarios para la canción
    this.songService.getAlbumSongProperties(this.albumForm.value);
    this.router.navigate(['/createSong', this.id]);
    
    this.isChanged = false;
    //reseteo de file
    this.file.nativeElement.value = "";
  }

  //función para transformar la imagen subida a url local
  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader(); //lector de archivos
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
    if (this.albumForm.get(field)?.hasError('required')) {
      return 'El campo es obligatorio';
    }
   
    return this.albumForm.get(field)? 'Algun exidente ocurrió' : '';
  }

  get emptyName(){
    return this.albumForm.get('name')?.invalid && this.albumForm.get('name')?.touched
  }
  get emptyYear(){
    return this.albumForm.get('year')?.invalid && this.albumForm.get('year')?.touched
  }

}
