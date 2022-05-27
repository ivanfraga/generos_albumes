import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Album, Genre, Song } from './song';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from "rxjs";;

@Injectable({
  providedIn: 'root'
})
export class SongService {

  //Genre varibles
  genreCollection: AngularFirestoreCollection<Genre>;
  genreList: Observable<Genre[]>;
  //Album variables
  albumCollection: AngularFirestoreCollection<Album>;
  albumList: Observable<Album[]>;
  //Song variables
  songCollection: AngularFirestoreCollection<Song>;
  songList: Observable<Song[]>;

  constructor(private angularFirestore: AngularFirestore,private storage: AngularFireStorage) {
    this.genreCollection= angularFirestore.collection("genres");
    this.genreList= this.genreCollection.valueChanges();
    this.albumCollection= angularFirestore.collection("albums");
    this.albumList= this.albumCollection.valueChanges();
    this.songCollection= angularFirestore.collection("canciones");
    this.songList= this.songCollection.valueChanges();

   }

   url: any =
      "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
    _file: any;
    file: any;
    name = "";
    id = null;
    isChanged = false;
    

   getList(collection: string){
     return this.angularFirestore
     .collection(collection)
     .snapshotChanges();
   }

   getObject(collection: string, id: any){
     return this.angularFirestore
     .collection(collection)
     .doc(id)
     .valueChanges()
   }

   

   genreCreate(genre: Genre, urlImg:any, filePath: any) {
    const id = this.angularFirestore.createId();

    this.genreCollection
      .doc(id)
      .set({id,
         name: genre.name,
         imageURL: urlImg, 
         author: "generic", 
         image_reference: filePath });
    
  }
  //función para agregar la imagen y luego crear el objeto en Firestore
  
  public filePath: string; //variable para guardar la ruta de imagenes
  
  addGenreAlbum(object: any, _file: any, collection: string) {
    //autor por defecto
    
    switch(collection) { //cambio de ruta dependiendo de la colección
      case "genres": { 
        this.filePath = collection+ "/generic/"+ object.name; //en caso que sea generos
         break; 
      } 
      case "albumes": { 
        this.filePath = collection+ "/" + object.name; //en caso que sea albumes
         break; 
      }
      case "songs": { 
        this.filePath = collection+ "/testSongs"+ "/" + object.song_name; //en caso que sea canciones
         break; 
      } 
      default: { 
         console.log("Por fa verifica el autor")
         break; 
      } 
   }
    const ref = this.storage.ref(this.filePath);
    console.log("el path hasta aquí si sirve")
    ref.put(_file).then(() => {
      ref.getDownloadURL().subscribe(url => {
        console.log("aqui obtiene el url de la canción", url)
        switch(collection) { 
          case "genres": { 
            this.genreCreate(object, url, this.filePath);
             break; 
          } 
          case "albumes": { 
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
  
  

  removeGenres(id: string) {
    if (confirm("Are you sure to delete the show from your list?")) {
      const filePath = "genres/" + this.name;
      this.storage.ref(filePath).delete;
      this.genreCollection.doc(id).delete;       
      
    }
  }

  //Album Functions

  albumCreate(album: Album, urlImg:any, filePath: any) {
    const id = this.angularFirestore.createId();

    this.albumCollection
      .doc(id)
      .set({id,
         genre_name: this.genre_name,
         name: album.name,
         imageURL: urlImg, 
         author: album.author, 
         image_reference: filePath,
        year: album.year });
    this.imageURL= urlImg; 
    //Comprobar datos enviados
    console.log(
      "propiedades del album\n",
      "album_name: ",
      this.album_name,
      "\nimageURL: ",
      this.imageURL,
      "\nyear: ",
      this.year,
      "\nauthor: ",
      this.author 
    );    
  }

  removeAlbums(id: string) {
    if (confirm("Are you sure to delete the show from your list?")) {
      const author = "generic"
      const filePath = "albums/"+ author+ "/" + this.name;
      this.storage.ref(filePath).delete;
      this.genreCollection.doc(id).delete;       
      
    }
  }

  //Song Functions
  
  public song_object: Song;

  public genre_name: string;
  public album_name: string;
  public imageURL: string;
  //public song_name: string;
  public year: number;
  public author: string;
  //public songURL: string;
  //public id_song: string;


  getGenreSongProperties(genre: Genre){
    //this.song_object.genre_name= genre.name;
    this.genre_name = genre.name;
    console.log("nombre del genero", this.genre_name);

  }

  getAlbumSongProperties(album: Album){
    //this.song_object.genre_name= genre.name;
    this.album_name = album.name;  
    this.year= album.year;
    this.author= album.author;
    console.log(
      "propiedades del album\n",
      "\nalbum_name: ",
      this.album_name,
      "\nimageURL: ",
      this.imageURL,
      "\nyear: ",
      this.year,
      "\nauthor: ",
      this.author 
    );
  }

  songCreate(song: Song, urlSong:any, filePath: any){
    const id = this.angularFirestore.createId();

    this.songCollection
      .doc(id)
      .set({
        id,
        genre_name: this.genre_name,
        album_name: this.album_name,
        imageURL: this.imageURL,
        song_name: song.song_name,
        year: this.year,
        author: this.author,
        songURL: urlSong,
        song_reference: filePath,

      })
      console.log(
        "propiedades de canción\n",
        "\ngenre_name: ",
        this.genre_name,
        "\nalbum_name: ",
        this.album_name,
        "\nimageURL: ",
        this.imageURL,
        "song_name: ",
        song.song_name,
        "\nyear: ",
        this.year,
        "\nauthor: ",
        this.author,
        "\nsongURL: ",
        urlSong,
        "\nsong_reference: ",
        filePath, 
      );
  }

  getAlbumSongs(collection: string){
    return this.angularFirestore
    .collection(collection, ref => ref.where('album_name', '==', this.album_name))
    .snapshotChanges();
  }

  updateSong(song: Song, urlSong:any, filePath: any){
    return this.songCollection
      .doc(this.id)
      .update({
        song_name: song.song_name,
        songURL: urlSong,
        song_reference: filePath
    });

  }
  deleteSong(song){
    return this.songCollection
    .doc(song.id)
    .delete();
  }


}
