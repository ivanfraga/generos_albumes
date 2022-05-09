import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreCreateComponent } from './songFields/genre/genre-create/genre-create.component';
import { GenreEditComponent } from './songFields/genre/genre-edit/genre-edit.component';
import { GenreShowComponent } from './songFields/genre/genre-show/genre-show.component';
import { AlbumShowComponent } from './songFields/album/album-show/album-show.component';
import { AlbumEditComponent } from './songFields/album/album-edit/album-edit.component';
import { AlbumCreateComponent } from './songFields/album/album-create/album-create.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongCreateComponent } from './songFields/song/song-create/song-create.component';
import { SongEditComponent } from './songFields/song/song-edit/song-edit.component';
import { SongShowComponent } from './songFields/song/song-show/song-show.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreCreateComponent,
    GenreEditComponent,
    GenreShowComponent,
    AlbumShowComponent,
    AlbumEditComponent,
    AlbumCreateComponent,
    SongCreateComponent,
    SongEditComponent,
    SongShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
