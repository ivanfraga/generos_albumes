import { Pipe, PipeTransform } from '@angular/core';
import { Album } from 'src/app/song';

@Pipe({
  name: 'filtroAlbumes'
})
export class FiltroAlbumesPipe implements PipeTransform {

  transform(albums: Album[], page: number = 0, search: string = '' ): Album[] {
    if ( search.length === 0 )
      return albums.slice(page, page + 5);
    
    const albumSearch = albums.filter( album => album.name.includes( search ) );
    return albumSearch.slice(page, page + 5);
  }


}
