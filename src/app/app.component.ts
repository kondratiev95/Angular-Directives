import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  toggle = false;

  objs = [
    { title: 'Post 1', author: 'Vladimir', comments: [
      { name: 'Max', text: 'Comment 1'},
      { name: 'Max', text: 'Comment 2'},
      { name: 'Max', text: 'Comment 3'}
    ]},
    { title: 'Post 2', author: 'Vladimir 2', comments: [
      { name: 'Max 2', text: 'Comment 1'},
      { name: 'Max 2', text: 'Comment 2'},
      { name: 'Max 2', text: 'Comment 3'}
    ]}
  ]
}
