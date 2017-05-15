import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent implements OnInit {


  @Input()
  query = '';

  @Output()
  search = new EventEmitter<string>();

  private keyUpStream = new EventEmitter<string>();

  constructor() {

    this.keyUpStream
        .distinctUntilChanged()
        .subscribe((value: string) => this.search.emit(value));
  }

  ngOnInit() {
  }

  keyUpSearch(query: string) {

    this.keyUpStream.emit(query);
  }




}
