import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  constructor() { }

  @Output() eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  onClick() {
    this.eventEmitter.emit("I have been clicked!")
  }

}
