import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  public genreForm: FormGroup;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.genreForm= this.formBuilder.group({
      name: [''],
      author: [''],
    })
  }

  ngOnInit(): void {
    
  }

  genreVerification(){
    return this.songService.noRepeat('genre', this.genreForm.value.name)
  }

  onSubmit(){
    if(this.genreVerification()){
      this.songService.createGenre(this.genreForm.value)
      this.router.navigate([''])
    }
    else{
      alert('Something was wrong')
    }
  }

}
