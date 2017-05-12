import {Component, OnInit, Input} from '@angular/core';
import {IRepo} from "../../common/models/repo";

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {


  @Input()
  repos: IRepo[]

  @Input()
  query: string;

  @Input()
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
