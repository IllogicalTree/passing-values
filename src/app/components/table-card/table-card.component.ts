import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html'
})
export class TableCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onEvent() {
    alert("Clicked!")
  }

}
