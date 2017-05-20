import {Component, OnInit, Input} from '@angular/core';
import {PullRequest} from "../../../shared/models/pull-request";

@Component({
  selector: 'pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.scss']
})
export class PullRequestsComponent implements OnInit {


  @Input()
  pulls: PullRequest[];
  constructor() { }

  ngOnInit() {
  }

}
