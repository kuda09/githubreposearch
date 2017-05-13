import {Component, OnInit, Input} from '@angular/core';
import {IIssue} from "../../../common/models/issue";

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {

  @Input()
  issues: IIssue[];
  constructor() { }

  ngOnInit() {
  }

  getLabelColor(color) {
    return '#' + color;
  }

}
