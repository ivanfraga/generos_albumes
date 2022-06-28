import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCreateDocComponent } from './components/album/album-create-doc/album-create-doc.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { AlbumShowDocComponent } from './components/album/album-show-doc/album-show-doc.component';
import { AlbumShowComponent } from './components/album/album-show/album-show.component';
import { ArtistRequestComponent } from './components/artist-request/artist-request.component';
import { FavoriteSelectDocComponent } from './components/favorite/favorite-select-doc/favorite-select-doc.component';
import { FavoriteShowDocComponent } from './components/favorite/favorite-show-doc/favorite-show-doc.component';
import { SelectFavoriteComponent } from './components/favorite/select-favorite/select-favorite.component';
import { ShowFavoriteComponent } from './components/favorite/show-favorite/show-favorite.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { GenreCreateDocComponent } from './components/genre/genre-create-doc/genre-create-doc.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreShowDocComponent } from './components/genre/genre-show-doc/genre-show-doc.component';
import { GenreShowComponent } from './components/genre/genre-show/genre-show.component';
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
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
import { SongShowAllComponent } from './components/song/song-show-all/song-show-all.component';
import { SongShowComponent } from './components/song/song-show/song-show.component';
import { UserProfileEditComponent } from './components/user/user-profile-edit/user-profile-edit.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'showGenre', component:GenreShowComponent},
  {path: 'showGenreDoc', component:GenreShowDocComponent},
  {path: 'createGenre', component:GenreCreateComponent},
  {path: 'createGenreDoc', component:GenreCreateDocComponent},
  {path: 'showAlbum', component:AlbumShowComponent},
  {path: 'createAlbum', component:AlbumCreateComponent},
  {path: 'showSong', component:SongShowComponent},
  {path: 'createSong', component:SongCreateComponent},
  {path: 'showAllSong', component:SongShowAllComponent},
  {path: 'updateSong/:id', component:SongEditComponent},
  {path: 'selectFavorites', component:SelectFavoriteComponent},
  {path: 'selectFavoritesDoc', component:FavoriteSelectDocComponent},
  {path: 'showFavorites', component:ShowFavoriteComponent},
  {path: 'showFavoritesDoc', component:FavoriteShowDocComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registerDoc', component: RegisterDocComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgotPassword', component: ForgotpasswordComponent},
  {path: 'artistRequest', component: ArtistRequestComponent},
  {path: 'createAlbumDoc', component: AlbumCreateDocComponent},
  {path: 'showAlbumDoc', component: AlbumShowDocComponent},

  {path: 'showAlbumSongs', component: ShowAlbumSongsComponent},
  {path: 'showAlbumSongsDoc', component: ShowAlbumSongsDocComponent},
  {path: 'showAlbums', component: ShowAlbumsComponent},
  {path: 'showAlbumsDoc', component: ShowAlbumsDocComponent},
  {path: 'showGenres', component: ShowGenreComponent},
  {path: 'showGenresDoc', component: ShowGenreDocComponent},
  {path: 'showGenreSongs', component: ShowGenreSongsComponent},
  {path: 'showGenreSongsDoc', component: ShowGenreSongsDocComponent},

  {path: 'createPlaylist', component: CreatePlaylistComponent}, 
  {path: 'createPlaylistDoc', component: CreatePlaylistDocComponent},   
  {path: 'addPlaylistSongs', component: AddPlaylistSongsComponent}, 
  {path: 'addPlaylistSongsDoc', component: AddPlaylistSongsDocComponent}, 
  {path: 'showPlaylist', component: ShowPlaylistComponent},
  {path: 'showPlaylistDoc', component: ShowPlaylistDocComponent},
  {path: 'showPlaylistSongs/:id', component: ShowPlaylistSongsComponent},
  {path: 'showPlaylistSongsDoc', component: ShowPlaylistSongsDocComponent},
  {path: 'userProfile/:id', component: UserProfileComponent},
  {path: 'userEdit/:id', component: UserProfileEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
