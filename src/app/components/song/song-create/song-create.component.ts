import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {

  public songForm: FormGroup;
  public collectionName= "songs"
  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
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

  ngOnInit(): void {
  }

  onSubmit(){
    this.songService.addGenreAlbum(this.songForm.value, this._file, this.collectionName);
    
    this.router.navigate(['/showSong']);
    
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
