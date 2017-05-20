import {Component, OnInit, OnDestroy} from '@angular/core';
import {AmChartsService} from "@amcharts/amcharts3-angular";
import {Observable} from "rxjs";
import * as _ from 'lodash';
import {Repo, Stats} from "../../../shared/models/repo";
import {Commit} from "../../../shared/models/commit";
import {Issue} from "../../../shared/models/issue";
import {PullRequest} from "../../../shared/models/pull-request";

import {RepoService} from "../../services/repo.service";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';


@Component({
    selector: 'repo',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit, OnDestroy {


    repo$: Observable<Repo>;
    commits$: Observable<Commit[]>;
    issues$: Observable<Issue[]>;
    pulls$: Observable<PullRequest[]>;
    chart: any;

    constructor(private repoService: RepoService,
                private AmCharts: AmChartsService) {
    }

    ngOnInit() {

        this.repo$ = this.repoService.getRepo();


        this.extractRepo(this.repo$);

    }

    ngOnDestroy() {

        this.AmCharts.destroyChart(this.chart);
    }

    extractRepo(repo$: Observable<Repo>) {

        repo$
            .filter((repo: Repo) => !!repo)
            .take(1)
            .subscribe(repo => {

                this.commits$ = this.repoService.getCommits(repo);
                this.issues$ = this.repoService.getIssues(repo);
                this.pulls$ = this.repoService.getPulls(repo);

                console.log(this.populateChartData(repo));

                this.chart = this.AmCharts.makeChart("chartdiv", {
                    "type": "pie",
                    "theme": "light",
                    "valueField": "value",
                    "titleField": "key",
                    "dataProvider": this.populateChartData(repo)
                });


            });

    }

    populateChartData(repo: Repo) {

        const stats: Stats = {
            forks: repo.forks,
            open_issues: repo.open_issues,
            score: repo.score,
            size: repo.size,
            subscribers_count: repo.subscribers_count,
        }

        let dataCollection = [];

        _.mapKeys(stats, function (value, key) {

            if (value === undefined) return;

            dataCollection.push({
                'key': key.toString(),
                'value': value
            })
        });

        return dataCollection;

    }

}
