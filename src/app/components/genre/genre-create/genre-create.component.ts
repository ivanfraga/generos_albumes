import { Component, OnInit } from '@angular/core';
////Servicio en donde estan los métodos genéricos
import { SongService } from 'src/app/song.service';
//Formulario reactivo
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ViewChild } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { Genre } from 'src/app/song';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {
  //variables genéricas
  //variables para la verificación
  public genreNames: string[] = [];
  Generos:Genre[]= [];
  //fin variables
  //Formulario reactivo
  public genreForm: FormGroup;
  //nombre de la colección
  public collectionName= "genres"
  isChanged = false;
  @ViewChild("file") file;//permite referenciar una instancia en HTML
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;
  
  constructor(
    private auth: AuthService,
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    //campos que maneja un género
    this.genreForm= this.formBuilder.group({
      name: ['',[Validators.required]],
      author: [''],
      image_reference: [''],
      imageURL: [''],
      id: null
    })
   }
   public id=this.activeRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    localStorage.setItem("recarga", "true");
    this.songService.getList("genres").subscribe((res) =>{
      this.Generos = res.map((e) =>{
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Genre)
        };
      });
    });
    

  }
  documentation(){
    this.router.navigate(['/createGenreDoc']);
  }
  onSubmit(){
    localStorage.setItem("recarga", "true");
    this.auth.rolVerification("artist");
    for (let i = 0; i < this.Generos.length; i++) {
      this.genreNames.push(this.Generos[i].name)
    }
    console.log("generos completos: ", this.Generos);
    console.log("generos nopmbres: ", this.genreNames);
    let incluyeGenero = this.genreNames.includes(this.genreForm.get('name').value);
    if(incluyeGenero){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Genero '+this.genreForm.get('name').value+ ' ya existe!',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
    else{

    //referencia al método del sevicio para crear género 
    this.songService.addGenreAlbum(this.genreForm.value, this._file, this.collectionName);
    //Obtiene datos necesarios para la canción
    this.songService.getGenreSongProperties(this.genreForm.value);
    //redirecciona a Crear Album
    this.router.navigate(['/createAlbum', this.id]);
    //Reestablecimiento de variables
    this.isChanged = false;
    this.file.nativeElement.value = "";
    }
  }
  //función para transformar la imagen subida a url local
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
    this.router.navigate(['/showGenre', this.id]);
  }

  //validaciones
  getErrorMessage_genero_nuevo(){
    if (this.genreForm.get('name')?.hasError('required')) {
      return 'El campo es obligatorio';
    }
   
    return this.genreForm.get('name')? 'El campo no permite números' : '';
  }
  get genero_nuevo_no_valido(){
    return this.genreForm.get('name')?.invalid && this.genreForm.get('name')?.touched
  }
  

}

