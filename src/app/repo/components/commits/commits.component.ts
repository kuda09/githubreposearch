import {Component, OnInit, Input} from '@angular/core';
import {ICommit} from "../../../common/models/commit";

@Component({
  selector: 'commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Input()
  commits: ICommit[];
  constructor() { }

  ngOnInit() {
  }

}
