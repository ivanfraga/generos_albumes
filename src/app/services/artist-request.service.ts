import { Injectable } from '@angular/core';
//AngularFirestore library
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { Artist } from '../song';

@Injectable({
  providedIn: 'root'
})
export class ArtistRequestService {

  constructor(private angularFirestore: AngularFirestore) { }

  //traemos todos los post
  getNoArtist(){
    return this.angularFirestore
    .collection("citizen", ref => ref.where('rol', '==', 'no artist')) //filtrado de usuarios no artistas
    .snapshotChanges()
  }
  getArtist(){
    return this.angularFirestore
    .collection("citizen", ref => ref.where('rol', '==', 'artist')) //filtrado de usuarios artistas
    .snapshotChanges()
  }

  //cambiar de rol
  artistRol(artist: Artist)
  {
    
    console.log("el rol a actualizar es: ", artist.id )
    const au = this.angularFirestore.doc(`citizen/${artist.id}`)
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
