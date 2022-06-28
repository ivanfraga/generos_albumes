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
  //función para actualizar playlist 
  //necesita parámetros: objeto playlist
  playlistUpdate(playlist: Playlist){
    return this.angularFirestore
      .doc(playlist.id)//referencia al documento por id
      //actualización de los siguientes campos de la canción
      .update({
        playlist_name: playlist.playlist_name
    })
  }
  
  //función para obtener canciones de playlist mediante la lista de ids
  //necesita parámetros: id de la playlist
  getPlaylistById( id: any){
    
    return this.angularFirestore
    //Búsqueda de canciones que pertenezcan al álbum
    .collection("songs", ref => ref.where('id', 'in', id))
    .snapshotChanges();
  }

  //función para obtener playlist 
  //No necesita parámetros
  showPlaylists(){
    //dirección de las playlists
    const path =  "playlist/"+this.userID+"/playlist";
    //retorna los documentos de la colección segun la dirección
    return this.angularFirestore.collection(path)
    .snapshotChanges();//obtiene los documentos
  }
  //función para añadir canciones al playlist  
  //Necesita parámetros: lista de ids de canciones
  addPlaylistSongs(playlistSongs: string[]){
    //dirección de la playlist
    const path = "playlist/"+this.userID+"/playlist";
    //añadir canciones a las ya existentes en el album
    this.playlist_songs.push(...playlistSongs);
    //actualizar la lista de canciones del album
    return this.angularFirestore.collection(path)
    .doc(this.id)
    .update({
      playlist_collection: this.playlist_songs
    })
  }
  //función para obtener los campos de playlist  
  //Necesita parámetros: objeto playlist
  getPlaylistProperties(playlist: Playlist){
    //actualiza el valor de las variables generales con los campos de la playlist
    this.id= playlist.id;
    this.playlist_name= playlist.playlist_name;
    this.playlist_songs= playlist.playlist_collection
    console.log("propiedades de la playlist: ", playlist)
  }
  //función para establecer la busqueda  
  //Necesita parámetros: busqueda de tipo texto
  setSearch(busqueda: string){
    //actualiza el valor de la busqueda
    this.busqueda= busqueda;
  }
  //función para buscar canciones
  //No necesita parámetros
  getSongsSearch(){
    //busca que coincidan con el nombre de la canción
    return this.angularFirestore
     .collection("songs", ref => ref.where('song_name', '==', this.busqueda))
     .snapshotChanges();
  }

  //Obtener playlist específica
  //necesita parámetros: id de la playlist
  getObject( id: any){
    //dirección de la playlist
    const path = "playlist/"+this.userID+"/playlist";
    //obtiene playlist segun el id
    return this.angularFirestore//accede a Firestore
    .collection(path)//especifica la colección
    .doc(id)//especifica el documento
    .valueChanges()//obtiene el documento
  }
  //Eliminar canción de la playlist
  //necesita parámetros: id de la canción
  deletePlaylistSong(id: string){
    //dirección de la playlist
    const path = "playlist/"+this.userID+"/playlist";
    //nuevo array que obtiene los ids omitiendo el id a eliminar
    var newArray = this.playlist_songs.filter((item) => item !== id);
    //asignación de la nueva lista de ids
    this.playlist_songs= newArray;
    //actualización de la lista de ids
    return this.angularFirestore.collection(path)
    .doc(this.id)
    .update({
      playlist_collection: this.playlist_songs
    })
  }



}
