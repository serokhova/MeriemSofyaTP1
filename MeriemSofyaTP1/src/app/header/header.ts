import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected firstPersonName = 'Meriem';
  protected secondPersonName = 'Sofya';
}