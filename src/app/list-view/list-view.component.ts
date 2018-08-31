import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Input() listposts: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.listposts);
  }

}
