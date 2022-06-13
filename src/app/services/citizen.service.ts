import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Album, Genre, Song } from '../song';
import { Observable } from "rxjs";;


@Injectable({
  providedIn: 'root'
})
export class CitizenService {
  genreCollection: AngularFirestoreCollection<Genre>;
  songCollection: AngularFirestoreCollection<Song>;

  constructor(private angularFirestore: AngularFirestore) {

    this.genreCollection= angularFirestore.collection("genres");
    this.songCollection= angularFirestore.collection("songs");

   }
   //Obtener colección de objetos 
   getList(collection: string){
    return this.angularFirestore
    .collection(collection)
    .snapshotChanges();
  }
  //Obtener un objeto en particular
  getObject(collection: string, id: any){
    return this.angularFirestore
    .collection(collection)
    .doc(id)
    .valueChanges()
  }

  //variables de canción
  public genre_name: string;
  public album_name: string;
  public imageURL: string;
  public song_name: string;
  public year: number;
  public author: string;
  public songURL: string;
  public song_reference: string;
  public id_song: string;

  //obtener propiedades de género 
  getGenreSongProperties(genre: Genre){
    this.genre_name = genre.name;
    console.log("nombre del genero", this.genre_name);
  }
  //obtener propiedades de álbum
  getAlbumSongProperties(album: Album){
    this.genre_name= album.genre_name;
    this.album_name = album.name;
    this.imageURL= album.imageURL  
    this.year= album.year;
    this.author= album.author;
    console.log(
      "propiedades del album\n","\nalbum_name: ",this.album_name,
      "\nimageURL: ",this.imageURL,"\nyear: ",this.year,"\nauthor: ",
      this.author 
    );
  }

  getGenreSongs(collection: string){
    return this.angularFirestore
    .collection(collection, ref => ref.where('album_name', '==', this.genre_name))
    .snapshotChanges();
  }

}
