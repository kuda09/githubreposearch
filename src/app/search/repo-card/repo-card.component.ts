import {Component, OnInit, Input} from '@angular/core';
import {Repo} from "../../shared/models/repo";
import {Router} from "@angular/router";

@Component({
  selector: 'repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss']
})
export class RepoCardComponent implements OnInit {


  @Input()
  repo: Repo;
  constructor(private router: Router) { }

  ngOnInit() {
  }


  goTo (owner, repoName) {

    this.router.navigate([`/repo/${owner}/${repoName}`]);
  }


}
