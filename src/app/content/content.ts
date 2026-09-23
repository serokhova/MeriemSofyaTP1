import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-content',
  styleUrl: './content.scss',
  templateUrl: './content.html',
})
export class Content {
  @Input() colors: string[] = [];
  @Output() colorSelected: EventEmitter<string> = new EventEmitter<string>();

  protected select(color: string): void {
    this.colorSelected.emit(color);
  }
}