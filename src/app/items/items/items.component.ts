import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {DataStreamService} from '../data-stream.service';
import 'rxjs/add/operator/takeUntil';
import {DataService} from './../data.service'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  items = [];

  constructor(private dataService: DataService, private streamService: DataStreamService) {
  }

  ngOnInit() {

    this.streamService.itemsChanges
      .takeUntil(this.ngUnsubscribe)
      .subscribe(items => {
        this.items = items;

      });
    this.dataService.getDataFromServer();
  }

}
