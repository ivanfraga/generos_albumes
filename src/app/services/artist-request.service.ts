import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Artist } from '../song';

@Injectable({
  providedIn: 'root'
})
export class ArtistRequestService {

  constructor(private angularFirestore: AngularFirestore) { }

  //traemos todos los no artistas
  getNoArtist(){
    return this.angularFirestore
    .collection("users", ref => ref.where('rol', '==', 'no artist')) //filtrado de usuarios no artistas
    .snapshotChanges()
  }
  //traemos todos los no artistas
  getArtist(){
    return this.angularFirestore
    .collection("users", ref => ref.where('rol', '==', 'artist')) //filtrado de usuarios artistas
    .snapshotChanges()
  }

  //cambiar de rol
  //necesita parámetro: objeto artista
  artistRol(artist: Artist)
  {
    console.log("el rol a actualizar es del artista: ", artist.id )
    const au = this.angularFirestore.doc(`users/${artist.id}`)
    au.update({
      rol: artist.rol= "artist"
      })
  }
  noArtistRol(artist: Artist){
    console.log("el rol a actualizar es: ")
    return this.angularFirestore
      .collection("citizen")
      .doc(artist.id)
      .update({
        rol: artist.rol= "no artist"
      })
  }
}
