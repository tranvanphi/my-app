import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import * as _ from 'lodash';  
import { CatelogyService } from '../_services/catelogy.service';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  public data : any;
  public originData : any = [];
  
  constructor(private CatelogyService:CatelogyService) { 
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
		this.CatelogyService.getCatelogyDetail().pipe(first()).subscribe(res => {
      this.originData = res;
      this.data = _.groupBy(res, 'id_group');
      // console.log(this.data);
      // console.log(this.originData);
    });
  }
  
  getKeys(data){
		return _.keys(data);
	}

	getGroupName(groupId){
		let item = _.find(this.originData,{id_group: groupId});
		return _.capitalize(item.namegroup);
	}

	getAliasName(groupId){
		let item = _.find(this.originData,{id_group: groupId});
		return _.capitalize(item.alias_name);
	}
}
