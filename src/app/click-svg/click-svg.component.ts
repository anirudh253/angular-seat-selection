import { Component, OnInit } from '@angular/core';

export const MAX_SELECTION = 9;

interface Seats {
  maxReached: boolean,
  attr: Array<Array<Attribute>>
}

interface Attribute {
  x: number,
  y: number,
  selected: boolean
}

@Component({
  selector: 'app-click-svg',
  templateUrl: './click-svg.component.html',
  styleUrls: ['./click-svg.component.css']
})
export class ClickSVGComponent implements OnInit {
  public seats: Seats = {maxReached: false, attr: []};
  range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  public toggleStyle: boolean = false;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.seats.attr[i] = [];
      for (let j = 0; j < 10; j++) {
        this.seats.attr[i].push({x: (i * 10), y: (j * 10), selected: false});
      }
    }
  }

  ngOnInit() {
  }

  counter() {
    const selected = (
      [].concat.apply([], (
        this.seats.attr.map(
          row => row.map(
            seat => seat.selected
          )
        )
      ))
    ).filter(status => status).length;
    
    if (selected === MAX_SELECTION) {
      this.seats.maxReached = true;
    } else {
      this.seats.maxReached = false;
    }
  }
}