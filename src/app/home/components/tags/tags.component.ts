import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Repo} from "../../../shared/models/repo";
import {CloudData} from "angular-tag-cloud-module";

@Component({
    selector: 'tags',
    templateUrl: './tags.component.html',
    styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit, OnChanges {


    @Input()
    trends: Repo[];
    data: CloudData[];

    constructor() {
    }

    ngOnInit() {


    }


    ngOnChanges(changes: SimpleChanges): void {

        this.data = this.trends.reduce((acc, repo: Repo) => {

            return [...acc, {
                text: repo.language,
                weight: repo.stargazers_count,
                color: '',
            }]
        }, []);

    }

}
