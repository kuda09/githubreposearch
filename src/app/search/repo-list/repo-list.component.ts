import {Component, OnInit, Input} from '@angular/core';
import {Repo} from "../../shared/models/repo";

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent implements OnInit {


  @Input()
  repos: Repo[]

  @Input()
  query: string;

  @Input()
  isLoading: boolean;
  constructor() { }

  ngOnInit() {
  }

}
