import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WPTS-Website';
  links = [
    {name: 'Listen',   nest: false, path: '/listen'},
    {name: 'About',    nest: true, children: [
      {name: 'Staff', nest: false, path:'/staff'},
      {name: 'Full Show Schedule', nest: false, path: ''},
      {name: 'Contacting the Station', nest: false, path: ''},
      {name: 'Mission, Vision, Values', nest: false, path: ''}
    ], path: null},
    {name: 'Contact',  nest: false, path: ''},
    {name: 'Music',    nest: true, children: [
      {name: 'Charts', nest: false, path: ''}
    ], path: ''},
    {name: 'News',     nest: false, path: ''},
    {name: 'Sports',   nest: false, path: ''},
    {name: 'Podcasts', nest: false, path: ''},
    {name: 'Events',   nest: false, path: ''}
  ];
}
