import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';

@Component({
  imports: [Header, Footer, Content],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '[style.background-color]': 'backgroundColor',
  }
})
export class App {
  protected colors = ['#f25022', '#7fba00', '	#00a4ef', '#ffb900'];
  protected backgroundColor = '';

  protected onColorSelected(color: string): void {
    this.backgroundColor = color;
  }
}
