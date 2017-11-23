import { Component, OnInit } from '@angular/core';

import { Endstand } from '../shared/endstand';

@Component({
  selector: 'app-endstand',
  templateUrl: './endstand.component.html',
  styleUrls: ['./endstand.component.css']
})
export class EndstandComponent implements OnInit {

  endstaende: Endstand[] = [
    { spieler1: "e", spieler2: "f", tore1: 3, tore2: 6 },
    { spieler1: "g", spieler2: "h", tore1: 4, tore2: 6 },
  ];

  constructor() { }

  ngOnInit() {
  }
}
