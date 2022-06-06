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
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
