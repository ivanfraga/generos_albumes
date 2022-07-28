import { Component, OnInit } from '@angular/core';
//omportar el servicio
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {
  //formulario reactivo
  public songEditForm: FormGroup;
  public collectionName= "songs"
  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;
  song: any;
  public id=this.activeRoute.snapshot.paramMap.get('id');
  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public router: Router
  ) {
    //declaración de los campos del formulario reactivo
    this.songEditForm= this.formBuilder.group({
      genre_name: [''],
      album_name: [''],
      imageURL: [''],
      song_name: [''],
      year: [0],
      author: [''],
      songURL: [''],
      song_reference: [''],
      id: [''],
    })
   }
   //función inicializadora
  ngOnInit(): void {
    
    localStorage.setItem("recarga", "true");
    //obtener el id de la url
    const id = this.activeRoute.snapshot.paramMap.get('id');
    //obtener la canción según el id seleccionado
    this.songService.getObject(this.collectionName,id).subscribe( res =>{
      //asignar el valor de la canción 
      this.song = res;
      //inicializar las campos del formulario segun la canción asignada
      this.songEditForm = this.formBuilder.group({
        genre_name: [this.song.genre_name],
        album_name: [this.song.album_name],
        imageURL: [this.song.imageURL],
        song_name: [this.song.song_name],
        year: [this.song.year],
        author: [this.song.author],
        songURL: [this.song.songURL],
        song_reference: [this.song.song_reference],
        id: [this.song.id],
      })
      this.url= this.song.songURL;

    })
  }
  onSubmit() {
    //obtener el id de la url
    const id = this.activeRoute.snapshot.paramMap.get('id');  
    //actualizar los campos 
    this.songService.updateSongProcess(this.songEditForm.value,
       this._file, this.collectionName, 
       this.isChanged, id);
    this.router.navigate(['/showSong', this.id]);
    //Ver los valores capturados
    console.log(this.songEditForm.value) 
    this.isChanged = false;
    this.file.nativeElement.value = "";
  }
  documentation(){
    this.router.navigate(['/updateSongDoc']);
  }

  //función para transformar la canción subida a url local
  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();
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
    this.router.navigate(['/showSong', this.id]);
  }
}
