import { Component, OnInit } from '@angular/core';
//importar servicio
import { SongService } from 'src/app/song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private activeRoute: ActivatedRoute,
    private auth : AuthService){ }
    //función inicializadora
   ngOnInit(): void {
    //obtener el id de la ruta
     const id = this.activeRoute.snapshot.paramMap.get('id');
     //asignación de id
     this.uid= id;
     //obtener el perfil
     this.songService.getObject(this.collectionName,id).subscribe( res =>{
      //asignación del perfil
       this.usuario = res;
       console.log("usuario valor: ", this.usuario);

       localStorage.setItem("idUser",this.usuario.id );
      console.log(localStorage.getItem("idUser"))
       //dependiendo del rol del usuario asignamos el nombre de redirección
       switch(this.usuario.rol) { 
        case "artist": { 
          this.redirection= "Subir una canción";
          
           break; 
        } 
        case "citizen": { 
          this.redirection= "Visualizar canciones";
          
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
  //función para redireccionar segun el rol
  showGenre(){
    switch(this.usuario.rol) { 
      case "artist": { 
        this.redirection= "Subir una canción";
        this.ruta.navigate(['/showGenre', this.usuario.id])
         break; 
      } 
      case "citizen": { 
        this.redirection= "Visualizar géneros";
        this.ruta.navigate(['/selectFavorites', this.usuario.id])
         break; 
      } 
      case "admin": { 
        this.redirection= "Gestionar artistas";
        this.ruta.navigate(['/artistRequest', this.usuario.id])
        break; 
     }
      default: { 
         alert("revisa que el usuario tenga rol")
         break; 
      } 
   }
  }
  //función para editar el perfil
  editar(){
    this.ruta.navigate(['/userEdit', this.uid])
  }
  logout(){
    this.auth.logout();
  }

}
