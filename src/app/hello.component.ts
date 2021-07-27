import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  jokes: Object[];
  contructor() {
    this.jokes = [
      {
        title: 'La la la',
        content: 'First joke',
        creator: 'Sujata',
        hide: true
      },
      {
        title: 'Lu la Lu',
        content: 'Second joke',
        creator: 'Hahaha',
        hide: false
      }
    ];
  }
}
