import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { AlbumShowComponent } from './components/album/album-show/album-show.component';
import { SelectFavoriteComponent } from './components/favorite/select-favorite/select-favorite.component';
import { ShowFavoriteComponent } from './components/favorite/show-favorite/show-favorite.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreShowComponent } from './components/genre/genre-show/genre-show.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
import { SongShowAllComponent } from './components/song/song-show-all/song-show-all.component';
import { SongShowComponent } from './components/song/song-show/song-show.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'showGenre', component:GenreShowComponent},
  {path: 'createGenre', component:GenreCreateComponent},
  {path: 'showAlbum', component:AlbumShowComponent},
  {path: 'createAlbum', component:AlbumCreateComponent},
  {path: 'showSong', component:SongShowComponent},
  {path: 'createSong', component:SongCreateComponent},
  {path: 'showAllSong', component:SongShowAllComponent},
  {path: 'updateSong/:id', component:SongEditComponent},
  {path: 'selectFavorites', component:SelectFavoriteComponent},
  {path: 'showFavorites', component:ShowFavoriteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgotPassword', component: ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
