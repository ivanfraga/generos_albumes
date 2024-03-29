import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreShowComponent } from './components/genre/genre-show/genre-show.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreEditComponent } from './components/genre/genre-edit/genre-edit.component';
import { AlbumShowComponent } from './components/album/album-show/album-show.component';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongShowComponent } from './components/song/song-show/song-show.component';
import { SongShowAllComponent } from './components/song/song-show-all/song-show-all.component';
import { SongEditComponent } from './components/song/song-edit/song-edit.component';
import { SelectFavoriteComponent } from './components/favorite/select-favorite/select-favorite.component';
import { ShowFavoriteComponent } from './components/favorite/show-favorite/show-favorite.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ArtistRequestComponent } from './components/artist-request/artist-request.component';
import { MatSliderModule } from '@angular/material/slider';
import { AlbumCreateDocComponent } from './components/album/album-create-doc/album-create-doc.component';
import { AlbumShowDocComponent } from './components/album/album-show-doc/album-show-doc.component';
import { ShowGenreComponent } from './components/showGenreAlbumSongs/show-genre/show-genre.component';
import { ShowGenreSongsComponent } from './components/showGenreAlbumSongs/show-genre-songs/show-genre-songs.component';
import { ShowAlbumsComponent } from './components/showGenreAlbumSongs/show-albums/show-albums.component';
import { ShowAlbumSongsComponent } from './components/showGenreAlbumSongs/show-album-songs/show-album-songs.component';
import { CreatePlaylistComponent } from './components/playlist/create-playlist/create-playlist.component';
import { ShowPlaylistComponent } from './components/playlist/show-playlist/show-playlist.component';
import { ShowPlaylistSongsComponent } from './components/playlist/show-playlist-songs/show-playlist-songs.component';
import { GenreCreateDocComponent } from './components/genre/genre-create-doc/genre-create-doc.component';
import { GenreShowDocComponent } from './components/genre/genre-show-doc/genre-show-doc.component';
import { FavoriteShowDocComponent } from './components/favorite/favorite-show-doc/favorite-show-doc.component';
import { FavoriteSelectDocComponent } from './components/favorite/favorite-select-doc/favorite-select-doc.component';
import { ShowAlbumSongsDocComponent } from './components/showGenreAlbumSongs/show-album-songs-doc/show-album-songs-doc.component';
import { ShowAlbumsDocComponent } from './components/showGenreAlbumSongs/show-albums-doc/show-albums-doc.component';
import { ShowGenreDocComponent } from './components/showGenreAlbumSongs/show-genre-doc/show-genre-doc.component';
import { ShowGenreSongsDocComponent } from './components/showGenreAlbumSongs/show-genre-songs-doc/show-genre-songs-doc.component';
import { AddPlaylistSongsComponent } from './components/playlist/add-playlist-songs/add-playlist-songs.component';
import { CreatePlaylistDocComponent } from './components/playlist/create-playlist-doc/create-playlist-doc.component';
import { ShowPlaylistDocComponent } from './components/playlist/show-playlist-doc/show-playlist-doc.component';
import { AddPlaylistSongsDocComponent } from './components/playlist/add-playlist-songs-doc/add-playlist-songs-doc.component';
import { ShowPlaylistSongsDocComponent } from './components/playlist/show-playlist-songs-doc/show-playlist-songs-doc.component';
import { RegisterDocComponent } from './components/register/register-doc/register-doc.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { UserProfileEditComponent } from './components/user/user-profile-edit/user-profile-edit.component';
import { SongShowDocComponent } from './components/song/song-show-doc/song-show-doc.component';
import { SongCreateDocComponent } from './components/song/song-create-doc/song-create-doc.component';
import { SongShowAllDocComponent } from './components/song/song-show-all-doc/song-show-all-doc.component';
import { SongEditDocComponent } from './components/song/song-edit-doc/song-edit-doc.component';
import { LoginDocComponent } from './components/login/login-doc/login-doc.component';
import { ForgotpasswordDocComponent } from './components/forgotpassword/forgotpassword-doc/forgotpassword-doc.component';
import { ArtistRequestDocComponent } from './components/artist-request/artist-request-doc/artist-request-doc.component';
import { UserProfileDocComponent } from './components/user/user-profile-doc/user-profile-doc.component';
import { UserProfileEditDocComponent } from './components/user/user-profile-edit-doc/user-profile-edit-doc.component';
import { NoArtistComponent } from './components/user/no-artist/no-artist.component';
import {MatIconModule} from '@angular/material/icon'
import { RolDeniedComponent } from './components/user/rol-denied/rol-denied.component';
import { FiltroCancionesPipe } from './components/pipes/filtro-canciones.pipe';
import { FiltroGenerosPipe } from './components/pipes/filtro-generos.pipe';
import { FiltroAlbumesPipe } from './components/pipes/filtro-albumes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenreShowComponent,
    GenreCreateComponent,
    GenreEditComponent,
    AlbumShowComponent,
    AlbumCreateComponent,
    SongCreateComponent,
    SongShowComponent,
    SongShowAllComponent,
    SongEditComponent,
    SelectFavoriteComponent,
    ShowFavoriteComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ArtistRequestComponent,
    AlbumCreateDocComponent,
    AlbumShowDocComponent,
    ShowGenreComponent,
    ShowGenreSongsComponent,
    ShowAlbumsComponent,
    ShowAlbumSongsComponent,
    CreatePlaylistComponent,
    ShowPlaylistComponent,
    ShowPlaylistSongsComponent,
    GenreCreateDocComponent,
    GenreShowDocComponent,
    FavoriteShowDocComponent,
    FavoriteSelectDocComponent,
    ShowAlbumSongsDocComponent,
    ShowAlbumsDocComponent,
    ShowGenreDocComponent,
    ShowGenreSongsDocComponent,
    AddPlaylistSongsComponent,
    CreatePlaylistDocComponent,
    ShowPlaylistDocComponent,
    AddPlaylistSongsDocComponent,
    ShowPlaylistSongsDocComponent,
    RegisterDocComponent,
    UserProfileComponent,
    UserProfileEditComponent,
    SongShowDocComponent,
    SongCreateDocComponent,
    SongShowAllDocComponent,
    SongEditDocComponent,
    LoginDocComponent,
    ForgotpasswordDocComponent,
    ArtistRequestDocComponent,
    UserProfileDocComponent,
    UserProfileEditDocComponent,
    NoArtistComponent,
    RolDeniedComponent,
    FiltroCancionesPipe,
    FiltroGenerosPipe,
    FiltroAlbumesPipe,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    MatIconModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
