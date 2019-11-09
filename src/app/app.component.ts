import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WPTS-Website';
  links = [
    {name: 'Listen', path: '/listen'},
    {name: 'About', path: ''},
    {name: 'Contact', path: ''},
    {name: 'Music', path: ''},
    {name: 'News', path: ''},
    {name: 'Sports', path: ''},
    {name: 'Podcasts', path: ''},
    {name: 'Events', path: ''},
  ];
}
