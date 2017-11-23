import { Component, OnInit } from '@angular/core';

import { Endstand } from '../shared/endstand';
import { EndstandService } from '../shared/endstand.service';

@Component({
  selector: 'app-endstand',
  templateUrl: './endstand.component.html',
  styleUrls: ['./endstand.component.css']
})
export class EndstandComponent implements OnInit {

  endstaende: Endstand[] = [];

  constructor(private endstandService: EndstandService) { }

  ngOnInit() {
    this.endstandService.getEndstaende().subscribe(endstaende => {
      this.endstaende = endstaende;
    });
  }
}
