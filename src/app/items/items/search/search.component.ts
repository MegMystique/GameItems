import { Component, OnInit } from '@angular/core';
import {DataStreamService} from './../../data-stream.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText:string='';
  constructor(private stream:DataStreamService) { }

  ngOnInit() {
  }
  search(){
    this.stream.searchTextChanges.next(this.searchText.trim())
  }
}
