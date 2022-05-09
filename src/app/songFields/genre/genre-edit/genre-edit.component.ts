import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router, ActivatedRoute } from '@angular/router';
import { SongService } from 'src/app/song.service';


@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {

  public genreEditForm: FormGroup;
  genreRef: any;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.genreEditForm = this.formBuilder.group({
      name : [''],
      author : ['']
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.songService.getGenreById(id).subscribe( res =>{
      this.genreRef = res;
      this.genreEditForm = this.formBuilder.group({
        name: [this.genreRef.name],
        author: [this.genreRef.author]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');   
    if(this.songService.noRepeat('genre', this.genreEditForm.value.name)){
      this.songService.updateGenre(this.genreEditForm.value, id);
      this.router.navigate(['']);
    }
    console.log(this.genreEditForm.value) //podemos ver los valores capturados
  }

}
