import { Pipe, PipeTransform } from '@angular/core';
import { Song } from 'src/app/song';

@Pipe({
  name: 'filtroCanciones'
})
export class FiltroCancionesPipe implements PipeTransform {

  transform(songs: Song[], page: number = 0, search: string = '' ): Song[] {
    if ( search.length === 0 )
      return songs.slice(page, page + 5);
    
    const songSearch = songs.filter( song => song.song_name.includes( search ) );
    return songSearch.slice(page, page + 5);
  }

}
