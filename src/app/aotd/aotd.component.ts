import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SpotifyService } from '../spotify.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-aotd',
  templateUrl: './aotd.component.html',
  styleUrls: ['./aotd.component.scss']
})
export class AotdComponent implements OnInit {
  
  songs: Song[];

  constructor(private spotifyService: SpotifyService){}

  async ngOnInit() {
    this.songs = await this.spotifyService.getList();
  }

  drop(event: CdkDragDrop<Song[]>){
    moveItemInArray(this.songs, event.previousIndex, event.currentIndex);
    console.log(this.songs);
  }

}
