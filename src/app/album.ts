import { Url } from 'url';
import { Song } from './song';

export class Album {
    cover: Url;
    name: String;
    artist: String;
    songs: Song[];
}