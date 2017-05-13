import {Component, OnInit} from '@angular/core';
import {IRepo} from "../../../common/models/repo";
import {Observable} from "rxjs";
import {ICommit} from "../../../common/models/commit";
import {IIssue} from "../../../common/models/issue";
import {IPullRequest} from "../../../common/models/pull-request";

import {RepoService} from "../../services/repo.service";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';

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


    constructor(private repoService: RepoService) {
    }

    ngOnInit() {

        this.repo$ = this.repoService.getRepo();

        this.extractRepo(this.repo$);

    }

    extractRepo(repo$: Observable<IRepo>) {

        repo$
            .filter((repo: IRepo) => !!repo)
            .take(1)
            .subscribe(repo =>  {

            this.commits$ = this.repoService.getCommits(repo);
            this.issues$ = this.repoService.getIssues(repo);
            this.pulls$ = this.repoService.getPulls(repo);

        });

    }

}
