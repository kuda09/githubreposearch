import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Observable} from "rxjs";
import {Repo} from "../../../shared/models/repo";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    trending$: Observable<Repo[]>

    constructor(private homeService: HomeService) {

        homeService.loadTrending();
    }

    ngOnInit() {

        this.trending$ = this.homeService.getTrending();
    }

}
