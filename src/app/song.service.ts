import { Injectable } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Album, AlbumImg, Genre } from './song.model';
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class SongService {

  speakerCollection: AngularFirestoreCollection<AlbumImg>;
  speakerList: Observable<AlbumImg[]>;

  constructor(private angularFirestore: AngularFirestore,private storage: AngularFireStorage) {

    this.speakerCollection = angularFirestore.collection("albumPrueba");
    this.speakerList = this.speakerCollection.valueChanges();

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
    .collection("genre", ref => ref.where('author', '==', 'generic')) 
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

  //Album image methods

  
  

  url: any =
    "https://i.pinimg.com/564x/65/df/2c/65df2c922e64c61235162ab7c0924d3c.jpg";
  _file;
  file;
  name = "";
  id = null;
  isChanged = false;
  year : number;
  
  update(albumImg: AlbumImg, urlImg) {
    
    this.speakerCollection
      .doc(albumImg.id)
      .update({ name: albumImg.name, url: urlImg, year: albumImg.year });
    
  }

  create(albumImg: AlbumImg, urlImg) {
    const id = this.angularFirestore.createId();
    
    this.speakerCollection.doc(id).set({ 
      id,
      name: albumImg.name,
      year: albumImg.year,
      url: urlImg
    });
    
  }

  add(albumImg: AlbumImg, _file) {
    
      const filePath = "albumes/" + albumImg.name;
      const ref = this.storage.ref(filePath);
      ref.put(_file).then(() => {
        ref.getDownloadURL().subscribe(url => {
          
          if (albumImg.id) {
            this.update(albumImg, url);
          } else {
            this.create(albumImg, url);
          }
        });
      });
    
  }

  remove(id: string) {
    if (confirm("Are you sure to delete the show from your list?")) {
      const filePath = "albumes/" + this.name;
      this.storage.ref(filePath).delete;
      this.speakerCollection.doc(id).delete;       
      
    }
  }

  getAlbumImgById(id){
    return this.speakerCollection
      .doc(id)
      .valueChanges()
  }
  

  

  
  
}
