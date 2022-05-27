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
}

export class Genre{
    id: string;
    name: string;
    author: string;
    image_reference: string;
    imageURL: string;
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