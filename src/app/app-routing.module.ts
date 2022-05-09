import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import album components
import { AlbumCreateComponent } from './songFields/album/album-create/album-create.component';
import { AlbumEditComponent } from './songFields/album/album-edit/album-edit.component';
import { AlbumShowComponent } from './songFields/album/album-show/album-show.component';

//import genre components 
import { GenreCreateComponent } from './songFields/genre/genre-create/genre-create.component';
import { GenreEditComponent } from './songFields/genre/genre-edit/genre-edit.component';
import { GenreShowComponent } from './songFields/genre/genre-show/genre-show.component';


const routes: Routes = [
  {path: '', component:GenreShowComponent},
  {path: 'genrecreate', component:GenreCreateComponent},
  {path: 'genreedit/:id', component:GenreEditComponent},
  {path: 'showalbums', component:AlbumShowComponent},
  {path: 'albumcreate', component:AlbumCreateComponent},
  {path: 'albumedit/:id', component:AlbumEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
