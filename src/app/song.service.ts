import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Album, Genre } from './song.model';



@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private angularFirestore: AngularFirestore) {

   }

  //Genre methods
  //Verify that the name of genre or album don't repeat to another one with the same name
  noRepeat(colection: string, name: string){
    if(this.angularFirestore.collection(colection, ref => ref.where('name', '==', name))){
      return true;
    }
    else{
      console.log(this.angularFirestore.collection(colection, ref => ref.where('name', '==', name)))
      return false;
    }
  }
  
  getGenre(){
    return this.angularFirestore
    .collection("genre", ref => ref.where('author', '==', 'generic')) //filtrado de usuarios no artistas
    .snapshotChanges()
  }

  getGenreById(id){
    return this.angularFirestore
      .collection("genre")
      .doc(id)
      .valueChanges()

  }

  createGenre(genre: Genre){
    return new Promise<any> ((resolve, reject) => {
      this.angularFirestore
      .collection("genre")
      .add({
        name: genre.name,
        author: genre.author,
      })
      .then((response) => {
        console.log(response)
      },
      (error) => {
        reject(error)
      })
      })

  }

  updateGenre(genre: Genre, id){
    return this.angularFirestore
      .collection("genre")
      .doc(id)
      .update({
        name: genre.name,
        author: genre.author
    });

  }

  deleteGenre(genre){
    return this.angularFirestore
    .collection("genre")
    .doc(genre.id)
    .delete();
  }

  //Album methods

  artist_album: Album;

  getAlbum(){
    return this.angularFirestore
    .collection("album") //filtrado de usuarios no artistas
    .snapshotChanges()
  }

  getAlbumById(id){
    return this.angularFirestore
      .collection("album")
      .doc(id)
      .valueChanges()

  }

  createAlbum(album: Album){
    return new Promise<any> ((resolve, reject) => {
      this.angularFirestore
      .collection("album")
      .add({
        name: album.name,
        year: album.year,
      })
      .then((response) => {
        console.log(response)
      },
      (error) => {
        reject(error)
      })
      })

  }

  updateAlbum(album: Album, id){
    return this.angularFirestore
      .collection("album")
      .doc(id)
      .update({
        name: album.name,
        year: album.year
    });

  }

  deleteAlbum(album){
    return this.angularFirestore
    .collection("album")
    .doc(album.id)
    .delete();
  }

  //Song methods
  
}
