import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  public genreForm: FormGroup;
  public collectionName= "genres"
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
    this.genreForm= this.formBuilder.group({
      name: [''],
      author: [''],
      image_reference: [''],
      imageURL: [''],
      id: null
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.songService.addGenreAlbum(this.genreForm.value, this._file, this.collectionName);
    this.songService.getGenreSongProperties(this.genreForm.value);
    this.router.navigate(['/createAlbum']);
    console.log(this.genreForm.value);
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
    this.router.navigate(['/showGenre']);
  }

}
