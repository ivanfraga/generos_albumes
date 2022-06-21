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
  //variables genéricas para crear canción
  public playlist_name: string;
  public playlist_songs: string[] = [];
  public id: string;
  public songId: string;
  public busqueda:string;

  public userID="DP3XfsWz0llXfYtU8UUO"//seria el usuario que inicia sesión

  //función para crear un género 
  //necesita parámetros: objeto género, url, referencia en FireStorage
   playlistCreate(playlist: Playlist) {
    const id = this.angularFirestore.createId();//crea un ID
    playlist.id= id;
    //crea un documento con los campos especificados 
    this.getPlaylistProperties(playlist);
    const path = "playlist/"+this.userID+"/playlist";
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

  getPlaylistById( id: any){
    
    return this.angularFirestore
    //Búsqueda de canciones que pertenezcan al álbum
    .collection("songs", ref => ref.where('id', 'in', id))
    .snapshotChanges();
  }

  showPlaylists(){
    const path =  "playlist/"+this.userID+"/playlist";
    return this.angularFirestore.collection(path)
    .snapshotChanges();//obtiene los documentos
  }

  addPlaylistSongs(playlistSongs: string[]){
    console.log("Playlist a ingresar: ", playlistSongs)
    console.log("Playlist semi: ", this.playlist_songs)
    const path = "playlist/"+this.userID+"/playlist";
    this.playlist_songs.push(...playlistSongs);
    console.log("Playlist completa: ", this.playlist_songs)
    return this.angularFirestore.collection(path)
    .doc(this.id)
    .update({
      playlist_collection: this.playlist_songs
    })
  }
  getPlaylistProperties(playlist: Playlist){
    this.id= playlist.id;
    this.playlist_name= playlist.playlist_name;
    this.playlist_songs= playlist.playlist_collection
    console.log("propiedades de la playlist: ", playlist)
  }

  setSearch(busqueda: string){
    this.busqueda= busqueda;
  }

  getSongsSearch(){
    return this.angularFirestore//accede a Firestore
     .collection("songs", ref => ref.where('song_name', '==', this.busqueda))//especifica la colección
     .snapshotChanges();//obtiene los documentos
  }

  //Obtener documento específico
  //necesita parámetros: nombre de la colección, id del documento
  getObject( id: any){
    const path = "playlist/"+this.userID+"/playlist";
    return this.angularFirestore//accede a Firestore
    .collection(path)//especifica la colección
    .doc(id)//especifica el documento
    .valueChanges()//obtiene el documento
  }

}
