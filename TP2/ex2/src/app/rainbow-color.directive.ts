import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowColor]',
})
export class RainbowColorDirective {
  colorsList = [
    'rgb(30,129,176)',
    'rgb(226,135,67)',
    'rgb(135,62,35)',
    'rgb(33,19,13)',
    'rgb(171,219,227)',
    'rgb(166, 57, 51)',
  ];

  @HostBinding('style.color') textColor: string = 'black';
  @HostBinding('style.borderColor') borderColor: string = 'black';
  constructor() {}

  private getRandomColor(): string {
    const idx = Math.floor(Math.random() * this.colorsList.length);
    return this.colorsList[idx];
  }

  @HostListener('keyup') onKeyUp() {
    const color = this.getRandomColor();
    this.textColor = color;
    this.borderColor = color;
  }
}
