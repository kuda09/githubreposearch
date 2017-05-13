import { Component, OnInit } from '@angular/core';
import {IRepo} from "../../../common/models/repo";
import {Observable} from "rxjs";
import {ICommit} from "../../../common/models/commit";
import {IIssue} from "../../../common/models/issue";
import {IPullRequest} from "../../../common/models/pull-request";
import {Store} from "@ngrx/store";
import {IApplicationState} from "../../../store/index";
import {getReposEntity, getReposCommits, getReposIssues, getReposPulls} from "../../../store/selectors";

@Component({
  selector: 'repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  public repo$: Observable<IRepo>;
  public commits$: Observable<ICommit[]>;
  public issues$: Observable<IIssue[]>;
  public pulls$: Observable<IPullRequest[]>;


  constructor(private store: Store<IApplicationState>) { }

  ngOnInit() {

    this.repo$ = this.store.select(getReposEntity);
    this.commits$ = this.store.select(getReposCommits);
    this.issues$ = this.store.select(getReposIssues);
    this.pulls$ = this.store.select(getReposPulls);

  }

}
