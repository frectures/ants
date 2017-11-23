import { Component, OnInit } from '@angular/core';

import { Endstand } from '../shared/endstand';
import { EndstandService } from '../shared/endstand.service';

@Component({
  selector: 'app-new-endstand',
  templateUrl: './new-endstand.component.html',
  styleUrls: ['./new-endstand.component.css']
})
export class NewEndstandComponent implements OnInit {

  constructor(private endstandService: EndstandService) { }

  ngOnInit() {
  }
  
  onSubmit(f: any) {
    if (!f.valid) {
      alert('invalid form!');
    } else {
      let endstand = f.value as Endstand;
      this.endstandService.postEndstand(endstand).subscribe(data => {
        alert("POST successful, please refresh your browser!");
      });
    }
  }
}
