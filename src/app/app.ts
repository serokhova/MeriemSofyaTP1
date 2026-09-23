import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Content } from './content/content';

@Component({
  imports: [Header, Footer, Content, NgClass],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected colors = ['orange', 'green', 'blue', 'yellow'];
  protected selectedColor = '';

  protected onColorSelected(color: string): void {
    this.selectedColor = color;
  }
}