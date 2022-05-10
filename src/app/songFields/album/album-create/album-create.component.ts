import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  public albumForm: FormGroup;
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
    this.albumForm= this.formBuilder.group({
      name: [''],
      year: [],
      id: null
    })
  }

  ngOnInit(): void {
    
  }
/*
  albumVerification(){
    return this.songService.noRepeat('album', this.albumForm.value.name)
  }

  onSubmit(){
    if(this.albumVerification()){
      this.songService.createAlbum(this.albumForm.value)
      this.router.navigate(['/showalbums'])
    }
    else{
      alert('Something was wrong')
    }
  }
  */

  onSubmit(){
    this.songService.add(this.albumForm.value, this._file)
    console.log(this.albumForm.value)
    this.isChanged = false;
    this.file.nativeElement.value = "";
    this.albumForm.reset({name: [''],
    year: [],
    id: null})
    this.url= "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";

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

}
