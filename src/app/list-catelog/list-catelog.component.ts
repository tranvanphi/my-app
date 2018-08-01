import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import * as _ from 'lodash';  
import { Catelogy } from '../_models/catelogy.model';
import { CatelogyService } from '../_services/catelogy.service';

@Component({
  selector: 'app-list-catelog',
  templateUrl: './list-catelog.component.html',
  styleUrls: ['./list-catelog.component.css']
})
export class ListCatelogComponent implements OnInit {
  catelogis :Catelogy[] = [];

	constructor(private CatelogyService: CatelogyService) {
		this.getData();
	}

	ngOnInit() {}

	getData(){
		this.CatelogyService.getAll().pipe(first()).subscribe(data => {
				// console.log(data);
      this.catelogis = data;
      
    });
	}

	getCapitalizeName(name:string){
		return _.capitalize(name);
	}

}
