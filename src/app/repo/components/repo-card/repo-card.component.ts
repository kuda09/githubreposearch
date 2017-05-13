import {Component, OnInit, Input} from '@angular/core';
import {IRepo} from "../../../common/models/repo";

@Component({
  selector: 'repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {


  @Input()
  repo: IRepo;
  constructor() { }

  ngOnInit() {
  }

}
