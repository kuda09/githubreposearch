import {Component, OnInit, Input} from '@angular/core';
import {Commit} from "../../../shared/models/commit";

@Component({
  selector: 'commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.scss']
})
export class CommitsComponent implements OnInit {

  @Input()
  commits: Commit[];
  constructor() { }

  ngOnInit() {
  }

}
