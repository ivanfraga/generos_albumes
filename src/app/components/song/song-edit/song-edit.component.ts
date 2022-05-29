import { Component, OnInit } from '@angular/core';
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

  public songEditForm: FormGroup;
  public collectionName= "canciones"
  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;
  song: any;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    public router: Router
  ) {
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

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.songService.getObject(this.collectionName,id).subscribe( res =>{
      this.song = res;
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
    const id = this.activeRoute.snapshot.paramMap.get('id');   
    this.songService.updateSongProcess(this.songEditForm.value, this._file, this.collectionName, this.isChanged, id);
    this.router.navigate(['/showSong']);
    console.log(this.songEditForm.value) //podemos ver los valores capturados
    this.isChanged = false;
    this.file.nativeElement.value = "";
  }

  onFilesAdded(target: any) {
    this.isChanged = true;
    const reader = new FileReader();
    reader.onload = () => {
      this.url = reader.result;
    };
    if (target.files.length > 0) {
      this._file = target.files[0];
      reader.readAsDataURL(this._file);
    }
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  redirect(){
    this.router.navigate(['/showAlbum']);
  }

}
