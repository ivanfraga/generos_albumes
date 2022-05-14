import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';
import { ViewChild } from "@angular/core";

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  public albumEditForm: FormGroup;
  albumRef: any;
  isChanged = false;
  @ViewChild("file") file;
  files: Set<File> = new Set();
  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.albumEditForm = this.formBuilder.group({
      name : [''],
      year : [],
      url: ['']
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.songService.getAlbumImgById(id).subscribe( res =>{
      this.albumRef = res;
      this.albumEditForm = this.formBuilder.group({
        name: [this.albumRef.name],
        year: [this.albumRef.year],
        url: [this.albumRef.url]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');   
    this.albumEditForm.reset({id: [this.activeRoute.snapshot.paramMap.get('id')]})
    this.songService.add(this.albumEditForm.value, this._file)
    this.router.navigate(['/showalbums']);
    console.log(this.albumEditForm.value) //podemos ver los valores capturados
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
