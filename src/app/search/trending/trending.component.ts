import {Component, OnInit, Input} from '@angular/core';
import {IRepo} from "../../common/models/repo";

@Component({
  selector: 'trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {


  @Input()
  trends: IRepo[];
  constructor() { }

  ngOnInit() {
  }

}
