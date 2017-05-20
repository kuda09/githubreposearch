import {Component, OnInit, Input} from '@angular/core';
import {Repo} from "../../../shared/models/repo";

@Component({
  selector: 'trending',
    templateUrl: 'trending.component.html',
    styleUrls: ['trending.component.scss']
})
export class TrendingComponent implements OnInit {


  @Input()
  trends: Repo[];
  constructor() { }

  ngOnInit() {
  }

}
