import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/find";
@Injectable()
export class DataStreamService {
  itemsChanges = new Subject<Object[]>();
   searchTextChanges = new Subject<String>();
  items = [];

  constructor() {
  }

  setData(data) {
    let items = [];
    for (let obj in data.data) {
      items.push(data.data[obj])
    }
    this.items = items;
    this.itemsChanges.next(this.items.slice());
    this.searchTextChanges.debounceTime(300).subscribe(text=>this.filterSearch(text))
  }

  filterSearch(text) {
    if (!text.length) {
      this.itemsChanges.next(this.items.slice());
    }
    else {
      let filterItems = this.items.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
      this.itemsChanges.next(filterItems.slice());
    }
  }

}
