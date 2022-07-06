import { Component, OnInit, NgZone  } from '@angular/core';
//importar servicio
import { SongService } from 'src/app/song.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalService } from 'src/app/services/local.service';

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
  public room: any;

  constructor(
    private zone: NgZone,
    public local: LocalService,
    public songService: SongService, 
    public ruta: Router, 
    private activeRoute: ActivatedRoute,
    private auth : AuthService){ }
    //función inicializadora
   ngOnInit(): void {
    this.recargaProcess();
    //obtener el id de la ruta
     const id = this.activeRoute.snapshot.paramMap.get('id');
     //asignación de id
     this.uid= id;
     
     //obtener el perfil
     this.songService.getObject(this.collectionName,id).subscribe( res =>{
      //asignación del perfil
       this.usuario = res;
       console.log("usuario valor: ", this.usuario);
      
       //this.local.set("user", this.usuario);
      console.log("el usuario guardado es: ", this.local.get("user"));
      
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
        this.ruta.navigate(['/showGenre', localStorage.getItem("id")])
         break; 
      } 
      case "citizen": { 
        this.redirection= "Visualizar géneros";
        this.ruta.navigate(['/selectFavorites', localStorage.getItem("id")])
         break; 
      } 
      case "admin": { 
        this.redirection= "Gestionar artistas";
        this.ruta.navigate(['/artistRequest', localStorage.getItem("id")])
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
  reloadPage() { // click handler or similar
    this.zone.runOutsideAngular(() => {
        location.reload();
    });
  }
  recargaProcess(){
    if(localStorage.getItem("recarga")==="true"){
      console.log("recarga");
      localStorage.setItem("recarga", "");
      this.reloadPage();
    }
    else{
      console.log("no recarga")
    }
  }

}
