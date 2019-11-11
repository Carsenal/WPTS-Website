import { Url } from 'url';
import { Album } from './album';

export class Person {
    pfp: String;
    name: String;
    instagram: Url;
    twitter: Url;
    album: Album;
    prefrences: Number[];
}
