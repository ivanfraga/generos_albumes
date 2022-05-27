import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCreateComponent } from './components/album/album-create/album-create.component';
import { AlbumShowComponent } from './components/album/album-show/album-show.component';
import { GenreCreateComponent } from './components/genre/genre-create/genre-create.component';
import { GenreShowComponent } from './components/genre/genre-show/genre-show.component';
import { SongCreateComponent } from './components/song/song-create/song-create.component';
import { SongShowAllComponent } from './components/song/song-show-all/song-show-all.component';
import { SongShowComponent } from './components/song/song-show/song-show.component';

const routes: Routes = [
  {path: 'showGenre', component:GenreShowComponent},
  {path: 'createGenre', component:GenreCreateComponent},
  {path: 'showAlbum', component:AlbumShowComponent},
  {path: 'createAlbum', component:AlbumCreateComponent},
  {path: 'showSong', component:SongShowComponent},
  {path: 'createSong', component:SongCreateComponent},
  {path: 'showAllSong', component:SongShowAllComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
