import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
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
