import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Playlist, Song } from '../song';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playlistCollection: AngularFirestoreCollection<Playlist>;

  constructor(private angularFirestore: AngularFirestore) {
    this.playlistCollection= angularFirestore.collection("playlist");
   }
  //Obtener todos los documentos de la colección
  //necesita parámetro: nombre de la colección
  getList(collection){
    return this.angularFirestore//accede a Firestore
     .collection(collection)//especifica la colección
     .snapshotChanges();//obtiene los documentos
  }
  //Obtener documento específico
  //necesita parámetros: nombre de la colección, id del documento
  getObject(collection: string, id: any){
    return this.angularFirestore//accede a Firestore
    .collection(collection)//especifica la colección
    .doc(id)//especifica el documento
    .valueChanges()//obtiene el documento
  }

  //variables genéricas para crear canción
  public playlist_name: string;
  public id: string;
  public songId: string;

  public userID="DP3XfsWz0llXfYtU8UUO"//seria el usuario que inicia sesión

  //función para crear un género 
  //necesita parámetros: objeto género, url, referencia en FireStorage
   playlistCreate(playlist: Playlist) {
    const id = this.angularFirestore.createId();//crea un ID
    playlist.id= id;
    //crea un documento con los campos especificados 
    this.getPlaylistProperties(playlist);
    const path = "playlist/"+this.userID+"/"+id;
    this.angularFirestore.collection(path).
      doc(id)
      //establece y crea documento mediante los campos especificados
      .set({
        id,
        playlist_name: playlist.playlist_name,
        playlist_collection: playlist.playlist_collection});
    
  }

  playlistUpdate(playlist: Playlist){
    return this.angularFirestore
      .doc(playlist.id)//referencia al documento por id
      //actualización de los siguientes campos de la canción
      .update({
        playlist_name: playlist.playlist_name
    })
  }

  getPlaylistSongProperties(playlist: Playlist){
    this.playlist_name= playlist.playlist_name;
    this.id= playlist.id;
  }

  getPlaylistById(collection: string, id: any){
    
    return this.angularFirestore
    //Búsqueda de canciones que pertenezcan al álbum
    .collection(collection, ref => ref.where('id', 'in', id))
    .snapshotChanges();
  }

  showPlaylistSongs(){
    const path =  "playlist/"+this.userID;
    return this.angularFirestore.collection(path)
    .doc(this.id)
    .valueChanges();
  }

  addPlaylistSongs(playlistSongs: any){
    const path = "playlist/"+this.userID+"/"+this.id;
    return this.angularFirestore.collection(path)
    .doc(this.id)
    .update({
      playlist_collection: playlistSongs
    })
  }
  getPlaylistProperties(playlist: Playlist){
    this.id= playlist.id;
    this.playlist_name= playlist.playlist_name
  }

}
