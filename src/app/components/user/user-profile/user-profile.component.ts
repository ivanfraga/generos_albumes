import { Component, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public usuario: any;
  public collectionName="users";
  public uid: any;
  public redirection: string;

  constructor(public songService: SongService, 
    public ruta: Router, 
    private activeRoute: ActivatedRoute,){ }

   ngOnInit(): void {
     const id = this.activeRoute.snapshot.paramMap.get('id');
     this.uid= id;
     this.songService.getObject(this.collectionName,id).subscribe( res =>{
       this.usuario = res;
       switch(this.usuario.rol) { 
        case "artist": { 
          this.redirection= "Subir una canción";
          
           break; 
        } 
        case "citizen": { 
          this.redirection= "Visualizar géneros";
          
           break; 
        } 
        case "admin": { 
          this.redirection= "Gestionar artistas";
          
          break; 
       }
        default: { 
           alert("revisa que el usuario tenga rol")
           break; 
        } 
     }
    })
  }

  showGenre(){
    switch(this.usuario.rol) { 
      case "artist": { 
        this.redirection= "Subir una canción";
        this.ruta.navigate(['/showGenre'])
         break; 
      } 
      case "citizen": { 
        this.redirection= "Visualizar géneros";
        this.ruta.navigate(['/showGenres'])
         break; 
      } 
      case "admin": { 
        this.redirection= "Gestionar artistas";
        this.ruta.navigate(['/artistRequest'])
        break; 
     }
      default: { 
         alert("revisa que el usuario tenga rol")
         break; 
      } 
   }
  }
  editar(){
    this.ruta.navigate(['/userEdit', this.uid])
  }

}
