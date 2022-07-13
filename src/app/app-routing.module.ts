import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCreateDocComponent } from './components/album/album-create-doc/album-create-doc.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { AlbumShowDocComponent } from './components/album/album-show-doc/album-show-doc.component';
import { AlbumShowComponent } from './components/album/album-show/album-show.component';
import { ArtistRequestDocComponent } from './components/artist-request/artist-request-doc/artist-request-doc.component';
import { ArtistRequestComponent } from './components/artist-request/artist-request.component';
import { FavoriteSelectDocComponent } from './components/favorite/favorite-select-doc/favorite-select-doc.component';
import { FavoriteShowDocComponent } from './components/favorite/favorite-show-doc/favorite-show-doc.component';
import { SelectFavoriteComponent } from './components/favorite/select-favorite/select-favorite.component';
import { ShowFavoriteComponent } from './components/favorite/show-favorite/show-favorite.component';
import { ForgotpasswordDocComponent } from './components/forgotpassword/forgotpassword-doc/forgotpassword-doc.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GenreCreateDocComponent } from './components/genre/genre-create-doc/genre-create-doc.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreShowDocComponent } from './components/genre/genre-show-doc/genre-show-doc.component';
import { GenreShowComponent } from './components/genre/genre-show/genre-show.component';
import { LoginDocComponent } from './components/login/login-doc/login-doc.component';
import { LoginComponent } from './components/login/login.component';
import { AddPlaylistSongsDocComponent } from './components/playlist/add-playlist-songs-doc/add-playlist-songs-doc.component';
import { AddPlaylistSongsComponent } from './components/playlist/add-playlist-songs/add-playlist-songs.component';
import { CreatePlaylistDocComponent } from './components/playlist/create-playlist-doc/create-playlist-doc.component';
import { CreatePlaylistComponent } from './components/playlist/create-playlist/create-playlist.component';
import { ShowPlaylistDocComponent } from './components/playlist/show-playlist-doc/show-playlist-doc.component';
import { ShowPlaylistSongsDocComponent } from './components/playlist/show-playlist-songs-doc/show-playlist-songs-doc.component';
import { ShowPlaylistSongsComponent } from './components/playlist/show-playlist-songs/show-playlist-songs.component';
import { ShowPlaylistComponent } from './components/playlist/show-playlist/show-playlist.component';
import { RegisterDocComponent } from './components/register/register-doc/register-doc.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAlbumSongsDocComponent } from './components/showGenreAlbumSongs/show-album-songs-doc/show-album-songs-doc.component';
import { ShowAlbumSongsComponent } from './components/showGenreAlbumSongs/show-album-songs/show-album-songs.component';
import { ShowAlbumsDocComponent } from './components/showGenreAlbumSongs/show-albums-doc/show-albums-doc.component';
import { ShowAlbumsComponent } from './components/showGenreAlbumSongs/show-albums/show-albums.component';
import { ShowGenreDocComponent } from './components/showGenreAlbumSongs/show-genre-doc/show-genre-doc.component';
import { ShowGenreSongsDocComponent } from './components/showGenreAlbumSongs/show-genre-songs-doc/show-genre-songs-doc.component';
import { ShowGenreSongsComponent } from './components/showGenreAlbumSongs/show-genre-songs/show-genre-songs.component';
import { ShowGenreComponent } from './components/showGenreAlbumSongs/show-genre/show-genre.component';
import { SongCreateDocComponent } from './components/song/song-create-doc/song-create-doc.component';
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongEditDocComponent } from './components/song/song-edit-doc/song-edit-doc.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
import { SongShowAllDocComponent } from './components/song/song-show-all-doc/song-show-all-doc.component';
import { SongShowAllComponent } from './components/song/song-show-all/song-show-all.component';
import { SongShowDocComponent } from './components/song/song-show-doc/song-show-doc.component';
import { SongShowComponent } from './components/song/song-show/song-show.component';
import { NoArtistComponent } from './components/user/no-artist/no-artist.component';
import { RolDeniedComponent } from './components/user/rol-denied/rol-denied.component';
import { UserProfileDocComponent } from './components/user/user-profile-doc/user-profile-doc.component';
import { UserProfileEditDocComponent } from './components/user/user-profile-edit-doc/user-profile-edit-doc.component';
import { UserProfileEditComponent } from './components/user/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermisoAdminGuard } from './permisos/permiso-admin.guard';
import { PermisoAlbumGuard } from './permisos/permiso-album.guard';
import { PermisoArtistGuard } from './permisos/permiso-artist.guard';
import { PermisoCitizenGuard } from './permisos/permiso-citizen.guard';
import { PermisoGeneroGuard } from './permisos/permiso-genero.guard';
import { PermisoGlobalGuard } from './permisos/permiso-global.guard';
import { PermisoPlaylistGuard } from './permisos/permiso-playlist.guard';
import { PermisoSongGuard } from './permisos/permiso-song.guard';

const routes: Routes = [
  {path: 'showGenre/:id', component:GenreShowComponent,canActivate:[PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'showGenreDoc', component:GenreShowDocComponent},
  {path: 'createGenre/:id', component:GenreCreateComponent,canActivate:[PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'createGenreDoc', component:GenreCreateDocComponent},
  {path: 'showAlbum/:id', component:AlbumShowComponent,canActivate:[PermisoGeneroGuard,PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'showAlbumDoc', component: AlbumShowDocComponent},
  {path: 'createAlbum/:id', component:AlbumCreateComponent,canActivate:[PermisoGeneroGuard,PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'createAlbumDoc', component: AlbumCreateDocComponent},
  {path: 'showSong/:id', component:SongShowComponent,canActivate:[PermisoAlbumGuard,PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'showSongDoc', component:SongShowDocComponent},
  {path: 'createSong/:id', component:SongCreateComponent,canActivate:[PermisoAlbumGuard,PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'createSongDoc', component:SongCreateDocComponent},
  {path: 'showAllSong/:id', component:SongShowAllComponent,canActivate:[PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'showAllSongDoc', component:SongShowAllDocComponent},
  {path: 'updateSong/:id', component:SongEditComponent,canActivate:[PermisoSongGuard,PermisoArtistGuard,PermisoGlobalGuard]},
  {path: 'updateSongDoc', component:SongEditDocComponent},
  {path: 'selectFavorites/:id', component:SelectFavoriteComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'selectFavoritesDoc', component:FavoriteSelectDocComponent},
  {path: 'showFavorites/:id', component:ShowFavoriteComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showFavoritesDoc', component:FavoriteShowDocComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginDoc', component: LoginDocComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerDoc', component: RegisterDocComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgotPassword', component: ForgotpasswordComponent},
  {path: 'forgotPasswordDoc', component: ForgotpasswordDocComponent},
  {path: 'artistRequest/:id', component: ArtistRequestComponent,canActivate:[PermisoAdminGuard,PermisoGlobalGuard]},
  {path: 'artistRequestDoc', component: ArtistRequestDocComponent},
  {path: 'showAlbumSongs/:id', component: ShowAlbumSongsComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showAlbumSongsDoc', component: ShowAlbumSongsDocComponent},
  {path: 'showAlbums/:id', component: ShowAlbumsComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showAlbumsDoc', component: ShowAlbumsDocComponent},
  {path: 'showGenres/:id', component: ShowGenreComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showGenresDoc', component: ShowGenreDocComponent},
  {path: 'showGenreSongs/:id', component: ShowGenreSongsComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showGenreSongsDoc', component: ShowGenreSongsDocComponent},
  {path: 'createPlaylist/:id', component: CreatePlaylistComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]}, 
  {path: 'createPlaylistDoc', component: CreatePlaylistDocComponent},   
  {path: 'addPlaylistSongs/:id', component: AddPlaylistSongsComponent,canActivate:[PermisoPlaylistGuard,PermisoCitizenGuard,PermisoGlobalGuard]}, 
  {path: 'addPlaylistSongsDoc', component: AddPlaylistSongsDocComponent}, 
  {path: 'showPlaylist/:id', component: ShowPlaylistComponent,canActivate:[PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showPlaylistDoc', component: ShowPlaylistDocComponent},
  {path: 'showPlaylistSongs/:id', component: ShowPlaylistSongsComponent,canActivate:[PermisoPlaylistGuard,PermisoCitizenGuard,PermisoGlobalGuard]},
  {path: 'showPlaylistSongsDoc', component: ShowPlaylistSongsDocComponent},
  {path: 'userProfile/:id', component: UserProfileComponent,canActivate:[PermisoGlobalGuard]},
  {path: 'userProfileDoc', component: UserProfileDocComponent},
  {path: 'userEdit/:id', component: UserProfileEditComponent,canActivate:[PermisoGlobalGuard]},
  {path: 'userEditDoc', component: UserProfileEditDocComponent},
  {path: 'noArtist', component: NoArtistComponent},
  {path: 'rolDenied', component: RolDeniedComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
