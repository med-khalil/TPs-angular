import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  fonts = [
    'Arial',
    'Monaco',
    'Helvetica',
    'Verdana',
    'Times New Roman',
    'Andalé Mono',
    'Courier',
    'Bradley Hand',
    'Brush Script MT',
    'Luminari',
  ];
  color: string = 'black';
  fontSize: number = 30;
  fontFamily: string = 'Arial';
}
