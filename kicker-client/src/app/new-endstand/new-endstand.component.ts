import { Component, OnInit } from '@angular/core';

import { Endstand } from '../shared/endstand';

@Component({
  selector: 'app-new-endstand',
  templateUrl: './new-endstand.component.html',
  styleUrls: ['./new-endstand.component.css']
})
export class NewEndstandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(f: any) {
    if (!f.valid) {
      alert('invalid form!');
    } else {
      let endstand = f.value as Endstand;
      console.log(JSON.stringify(endstand));
    }
  }
}
