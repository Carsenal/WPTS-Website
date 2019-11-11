import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song, listFromJSON } from './song';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService{
  private list: Song[];
  private loaded: boolean;

  constructor(private http: HttpClient) { this.loaded = false; }

  async getList(): Promise<Song[]>{
    if(this.loaded) return this.list;
    await this.fetchData();
    return this.getList();
  }

  async refresh(): Promise<Song[]>{
    await this.fetchData();
    return this.list;
  }

  private async fetchData(): Promise<void>{
    let data = await this.http.get('http://localhost:3000').toPromise();
    this.list = listFromJSON(data);
    this.loaded = true;
  }
}
