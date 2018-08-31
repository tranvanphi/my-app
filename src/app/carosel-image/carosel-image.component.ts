import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-carosel-image',
  templateUrl: './carosel-image.component.html',
  styleUrls: ['./carosel-image.component.css']
})
export class CaroselImageComponent implements OnInit {

  @Input() listimage: any;

  constructor() {}

  ngOnInit() {
    console.log(this.listimage);
  }


}
