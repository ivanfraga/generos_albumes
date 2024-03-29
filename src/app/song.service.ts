import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Album, Favorite, Genre, Song } from './song';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from "rxjs";;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  //Genre varibles
  //Crea una referencia a Firestore con los campos de género
  genreCollection: AngularFirestoreCollection<Genre>;
  genreList: Observable<Genre[]>;
  //Album variables
  //Crea una referencia a Firestore con los campos de álbum
  albumCollection: AngularFirestoreCollection<Album>;
  albumList: Observable<Album[]>;
  //Song variables
  //Crea una referencia a Firestore con los campos de canción
  songCollection: AngularFirestoreCollection<Song>;
  songList: Observable<Song[]>;
  //Favorite variables
  //favoriteCollection: AngularFirestoreCollection<Favorite>;


  constructor(private angularFirestore: AngularFirestore,private storage: AngularFireStorage) {
    //Especifica colección en Firestore
    this.genreCollection= angularFirestore.collection("genres");
    this.genreList= this.genreCollection.valueChanges();
    this.albumCollection= angularFirestore.collection("albums");
    this.albumList= this.albumCollection.valueChanges();
    this.songCollection= angularFirestore.collection("songs");
    this.songList= this.songCollection.valueChanges();
    //this.favoriteCollection= angularFirestore.collection("favorite");
   }

   
   //variables para subir archivos
   url: any =
      "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
    _file: any;
    file: any;
    name = "";
    id = null;
    isChanged = false;
    
   //Obtener todos los documentos de la colección
   //necesita parámetro: nombre de la colección
   getList(collection: string){
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

   
   //función para crear un género 
   //necesita parámetros: objeto género, url, referencia en FireStorage
   genreCreate(genre: Genre, urlImg:any, filePath: any) {
    const id = this.angularFirestore.createId();//crea un ID
    console.log("el id del género es: ", id)
    //crea un documento con los campos especificados 
    this.genreCollection
      .doc(id)//especifica el documento
      //establece y crea documento mediante los campos especificados
      .set({id,
         name: genre.name,
         imageURL: urlImg, 
         author: localStorage.getItem("nameUser"), 
         authorId: localStorage.getItem("idUser"),
         image_reference: filePath });
  }
  //función para agregar la imagen y luego crear el objeto en FireStorage
  
  public filePath: string; //variable para guardar la ruta de imagenes
  //Método para subir archivo a Firebase Storage y obtener la URL 
  addGenreAlbum(object: any, _file: any, collection: string) {
    //autor por defecto
    
    switch(collection) { //cambio de ruta dependiendo de la colección
      case "genres": { 
        this.filePath = collection+ "/"+ localStorage.getItem("idUser")+ "/"+ object.name; //en caso que sea generos
         break; 
      } 
      case "albumes": { 
        this.filePath = collection+ "/"+ localStorage.getItem("idUser")+ "/" + object.name; //en caso que sea albumes
         break; 
      }
      case "songs": { 
        this.filePath = collection+"/"+ localStorage.getItem("idUser")+ "/" + object.song_name; //en caso que sea canciones
         break; 
      } 
      default: { 
         console.log("Por fa verifica el autor")
         break; 
      } 
   }
   //Creación de la referencia en FireStorage dependiendo de la ruta
    const ref = this.storage.ref(this.filePath); 
    console.log("el path hasta aquí si sirve")
    //Agregar el archivo dependiendo de la referencia
    ref.put(_file).then(() => {
      //obtiene la URL del archivo subido
      ref.getDownloadURL().subscribe(url => {
        console.log("aqui obtiene el url de la canción", url)
        switch(collection) { 
          case "genres": { 
            this.genreCreate(object, url, this.filePath);
             break; 
          } 
          case "albumes": { 
            //Referencia para crear álbum
            //envia parámetros album, url, referencia en FireStorage
             this.albumCreate(object, url, this.filePath);
             break; 
          }
          case "songs": { 
            console.log("aqui manda a guardar los datos")
            this.songCreate(object, url, this.filePath);
            break; 
         } 
          default: { 
             console.log("Por fa verifica el nombre de la colección")
             break; 
          } 
       }
           
      });
    });  
  }
  
  
  //función para eliminar géneros
  removeGenres(id: string) {
    if (confirm("Are you sure to delete the show from your list?")) {
      const filePath = "genres/" + this.name; //especifica ruta del archivo
      this.storage.ref(filePath).delete(); //elimina el archivo en FireStorage
      this.genreCollection.doc(id).delete();//elimina el archivo en Firestore
      
    }
  }

  //Album Functions
  //función para crear un álbum 
  //necesita parámetros: objeto género, url, referencia en FireStorage
  albumCreate(album: Album, urlImg:any, filePath: any) {
    const id = this.angularFirestore.createId();//crea un ID
    localStorage.setItem("imageURL", urlImg);
    //crea un documento con los campos especificados
    this.albumCollection
      .doc(id)//especifica el documento
      //establece y crea documento mediante los campos especificados
      .set({id,
        //nombre del género por parte de variable general
         //genre_name: this.genre_name, 
         genre_name: localStorage.getItem("genreName"),
         name: album.name,
         imageURL: urlImg, 
         author: localStorage.getItem("nameUser"), 
         image_reference: filePath,
        year: album.year });
    this.imageURL= urlImg; 
    //Comprobar datos enviados
    console.log(
      "propiedades del album\n",
      "album_name: ",
      album.name,
      "\nimageURL: ",
      urlImg,
      "\nyear: ",
      album.year,
      "\nauthor: ",
      localStorage.getItem("nameUser") 
    );    
  }
  //función para eliminar géneros
  removeAlbums(id: string) {
    if (confirm("Are you sure to delete the show from your list?")) {
      const author = "generic"
      const filePath = "albums/"+ author+ "/" + this.name;//ruta en FireStorage
      this.storage.ref(filePath).delete();//eliminar archivo en FireStorage
      this.genreCollection.doc(id).delete();//eliminar documento en Firestore      
    }
  }

  //Song Functions
  //variables genéricas para crear canción
  public genre_name: string;
  public album_name: string;
  public imageURL: string;
  public song_name: string;
  public year: number;
  public author: string;
  public songURL: string;
  public song_reference: string;
  public id_song: string;

  //función para obtener datos del género
  getGenreSongProperties(genre: Genre){
    //asignación de datos de género en variables genéricas 
    localStorage.setItem("genreName", genre.name);
  }
  //función para obtener datos del álbum
  getAlbumSongProperties(album: Album){
    //asignación de datos de álbum en variables genéricas
    localStorage.setItem("album_name", album.name);
    localStorage.setItem("imageURL", album.imageURL);
    localStorage.setItem("year", String(album.year));
    
  }
  //función para obtener datos de canción
  getSongProperties(song: Song){
    //asignación de datos de canción en variables genéricas
    this.genre_name= song.genre_name;
    this.album_name = song.song_name;
    this.imageURL= song.imageURL; 
    this.song_name= song.song_name;
    this.year= song.year;
    this.author= song.author;
    this.songURL= song.songURL;
    this.song_reference= song.song_reference;
    this.id= song.id;
    console.log("Propiedades cancion: \n", 
    "\n",this.genre_name,
    "\n",this.album_name,
    "\n",this.imageURL,
    "\n",this.song_name,
    "\n",this.year,
    "\n",this.author,
    "\n",this.songURL,
    "\n",this.song_reference,
    "\n",this.id )
  }
  //función para crear canción 
  //necesita parámetros: objeto canción, url, referencia en FireStorage
  songCreate(song: Song, urlSong:any, filePath: any){
    const id = this.angularFirestore.createId();//crea un ID
    //obtener datos de variables genéicas para asignarlas a campos de canción
    this.song_name= song.song_name;
    localStorage.setItem("song_name", song.song_name);
    this.songURL= urlSong;
    this.song_reference= filePath;
    this.id= id;
    //crea un documento con los campos especificados
    this.songCollection
      .doc(id)
      .set({
        id,
        genre_name: localStorage.getItem("genreName"),
        album_name: localStorage.getItem("album_name"),
        imageURL: localStorage.getItem("imageURL"),
        song_name: song.song_name,
        year: parseInt(localStorage.getItem("year")),
        author: localStorage.getItem("nameUser"),
        songURL: urlSong,
        song_reference: filePath,
        authorId: localStorage.getItem("idUser")
      })  
  }

  
  //Función para obtener canciones pertenecientes a album
  //necesita parámetro: nombre de álbum
  getAlbumSongs(collection: string){
    return this.angularFirestore
    //Búsqueda de canciones que pertenezcan al álbum
    .collection(collection, ref => ref.where('album_name', '==', localStorage.getItem("album_name")))
    .snapshotChanges();
  }


  //función para actualizar canción
  //necesita parámetros: objeto canción, url, referencia en FireStorage
  updateSong(song: Song, urlSong:any, filePath: any, id:any){
    //obtener datos de variables genéicas para asignarlas a campos de canción
    this.album_name= song.album_name;
    this.song_name= song.song_name;
    this.songURL= urlSong;
    this.song_reference= filePath;
    localStorage.setItem("song_name", song.song_name);
    return this.songCollection
      .doc(id)//referencia al documento por id
      //actualización de los siguientes campos de la canción
      .update({
        song_name: song.song_name,
        songURL: urlSong,
        song_reference: filePath
    })
  }
  //función para eliminar canción
  //necesita parámetro: objeto canción
  deleteSong(song){
    //Eliminar archivo segun la referencia de la canción en FireStorage
    this.storage.ref(song.song_reference).delete();
    //Eliminar documento segun el id de la canción en Firestore
    return this.songCollection
    .doc(song.id)
    .delete();
  }
  //función para obtener url de la canción actualizada
  //necesita parámetros: objeto canciones, archivo, nombre de colección, boolean, id
  updateSongProcess(object: any, _file: any, collection: string, isChanged:boolean, id:any){
    //verifica si hubo cambio de archivo canción
    if(isChanged){
      this.filePath = collection+ "/testSongs"+ "/" + object.song_name;
      const ref = this.storage.ref(this.filePath);
      console.log("el path hasta aquí si sirve")
      ref.put(_file).then(() => {
        ref.getDownloadURL().subscribe(url => {
          this.storage.ref(object.song_reference).delete();
          this.updateSong(object, url, this.filePath, id)
        })
      });
    }
    //si no hubo cambio de archivo canción se llama a función de actualizar canción
    else{
      this.updateSong(object, object.songURL, object.song_reference, id)
    }
  }

  //FAVORITES

  public userID=localStorage.getItem("idUser");//seria el usuario que inicia sesión
  //función para añadir canciones a favoritos
  //necesita parámetros: objeto canciones
  addToFavorite(song: Song){
    //la dirección de la colección se determina por el ID del usuario
    const path="/favorite/"+this.userID+"/songs"
    console.log("La canción guadada es: ", song.song_name,
    "\n Su ID: ", song.id)
    //se procede a guardar el ID de la canción
    return this.angularFirestore
      //se guarda en la dirección anteriomente especificada
     .collection(path)
     //toma el nombre del ID de la canción
     .doc(song.id)
     //establece el documento mediante el ID de la canción
     .set({
      id: song.id
     })

  }
  //función para obtener canciones segun los id guardados en Favoritos
  //necesita parámetros: 
  //el nombre de la collección a estraer los documentos
  //la lista de id de los documentos
  getfavoriteById(collection: string, id: any){
    //retorna los documentos que coincidan con la lista de id
    return this.angularFirestore
    .collection(collection, ref => ref.where('id', 'in', id))
    .snapshotChanges();
  }
  //función para remover canciones de la lista de Favoritos
  //necesita parámetro: ID de la canción a remover
  removeFavorite(id: string){
    //especificamos la dirección de favoritos
    const path="/favorite/"+this.userID+"/songs";
    //eliminamos la referencia de la canción segun su ID 
    return this.angularFirestore
     .collection(path)
     .doc(id)
     .delete();
  }

  //función para obtener canciones del género o álbum
  //necesita parámetro: nombre de la colección
  getAlbumGenreSongs(collection: string){
    //vaiable que tendrá las canciones
    let canciones: any;

    if(collection=="genres"){
      //Búsqueda de canciones que pertenezcan al género
      canciones= this.angularFirestore
      .collection("songs", ref => ref.where('genre_name', '==', localStorage.getItem("genreName")))
      .snapshotChanges();
    }
    if(collection=="albums"){
      //Búsqueda de canciones que pertenezcan al álbum
      canciones= this.angularFirestore
      .collection("songs", ref => ref.where('album_name', '==', localStorage.getItem("album_name")))
      .snapshotChanges();
    }
    return canciones;
  }
  //función para obtener álbumes correspondientes al género
  getAlbums(){
    return this.angularFirestore
    .collection("albums", ref => ref.where('genre_name', '==', localStorage.getItem("genreName")))
    .snapshotChanges();
  }
  getGenres(collection: string){
    return this.angularFirestore
    //Búsqueda de géneros que pertenezcan al artista
    .collection(collection, ref => ref.where('authorId', '==', localStorage.getItem("idUser")))
    .snapshotChanges();
  }
  getUserAllSongs(){
    return this.angularFirestore
    //Búsqueda de canciones que pertenezcan al álbum
    .collection("songs", ref => ref.where('authorId', '==', localStorage.getItem("idUser")))
    .snapshotChanges();
  }

}
