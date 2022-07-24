import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from 'src/app/song';

@Pipe({
  name: 'filtroGeneros'
})
export class FiltroGenerosPipe implements PipeTransform {

  transform(genres: Genre[], page: number = 0, search: string = '' ): Genre[] {
    
    if ( search.length === 0 )
      return genres.slice(page, page + 5);
    
    const genreSearch = genres.filter( genre => genre.name.includes( search ) );
    console.log("coincidencias: ", genreSearch)
    return genreSearch.slice(page, page + 5);
  }

}
