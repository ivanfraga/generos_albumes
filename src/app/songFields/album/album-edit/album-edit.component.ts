import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css']
})
export class AlbumEditComponent implements OnInit {

  public albumEditForm: FormGroup;
  albumRef: any;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.albumEditForm = this.formBuilder.group({
      name : [''],
      year : []
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.songService.getAlbumById(id).subscribe( res =>{
      this.albumRef = res;
      this.albumEditForm = this.formBuilder.group({
        name: [this.albumRef.name],
        year: [this.albumRef.year]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');   
    if(this.songService.noRepeat('album', this.albumEditForm.value.name)){
      this.songService.updateAlbum(this.albumEditForm.value, id);
      this.router.navigate(['/showalbums']);
    }
    console.log(this.albumEditForm.value) //podemos ver los valores capturados
  }

}
