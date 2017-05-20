import {Component, OnInit, Input} from '@angular/core';
import {Issue} from "../../../shared/models/issue";

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  @Input()
  issues: Issue[];
  constructor() { }

  ngOnInit() {
  }

  getLabelColor(color) {
    return '#' + color;
  }

}
