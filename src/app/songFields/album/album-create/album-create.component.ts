import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent implements OnInit {

  public albumForm: FormGroup;

  constructor(
    public songService: SongService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.albumForm= this.formBuilder.group({
      name: [''],
      year: [],
    })
  }

  ngOnInit(): void {
    
  }

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

}
