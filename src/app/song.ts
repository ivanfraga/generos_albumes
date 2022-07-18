export class Song {
    genre_name:string;
    album_name: string;
    imageURL: string;
    song_name: string;
    year: number;
    author: string;
    songURL: string;
    song_reference: string;
    id: string;
    authorId: string;
}

export class Genre{
    id: string;
    name: string;
    author: string;
    image_reference: string;
    imageURL: string;
    authorId: string;
}

export class Favorite{
    id:string;
}

export class Playlist{
    id: string;
    playlist_name: string;
    playlist_collection: []; 
}

export class Album{
    id: string;
    genre_name:string;
    name: string;
    author: string;
    year: number;
    image_reference: string;
    imageURL: string;
}

export class Artist {
    id: string;
    birthdate: Date;
    mail: string;
    name: string;
    password: string;
    rol: string;
}

export class User {
    id: string;
    birthdate: string;
    mail: string;
    name: string;
    password?: string;
    rol: string;
    imageURL: string;
    image_reference: string;
}

export class GlobalUser{
    public id: string;
    public birthdate: string;
    public mail: string;
    public name: string;
    public password: string;
    public rol: string;
    public imageURL: string;
    public image_reference: string;

    setUserProperties(user: User){
        this.id= user.id;
        this.birthdate= user.birthdate;
        this.mail= user.mail;
        this.name= user.name;
        this.password= user.password;
        this.rol= user.rol;
        this.imageURL= user.imageURL;
        this.image_reference= user.image_reference;
        console.log("id ususario: ", this.id)
    }
    getuserProperties(){
        let usuario: User;
        usuario.birthdate= this.birthdate;
        usuario.id= this.id;
        usuario.mail= this.mail;
        usuario.name= this.name;
        usuario.password= this.password;
        usuario.rol= this.rol;
        usuario.imageURL= this.imageURL;
        usuario.image_reference= this.image_reference;
        console.log("valores obtenidos: ", usuario)
        return usuario;
    }
}
