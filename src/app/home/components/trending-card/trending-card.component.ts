import {Component, OnInit, Input} from '@angular/core';
import {Repo} from "../../../shared/models/repo";
import {Router} from "@angular/router";

@Component({
    selector: 'trending-card',
    templateUrl: './trending-card.component.html',
    styleUrls: ['./trending-card.component.scss']
})
export class TrendingCardComponent implements OnInit {


    @Input()
    repo: Repo;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    goTo(owner, repoName) {

        this.router.navigate([`/repo/${owner}/${repoName}`]);
    }

}
