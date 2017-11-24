import { Component, OnInit } from '@angular/core';

import { RankingsService } from '../shared/rankings.service';
import { Ranking } from '../shared/ranking';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  rankings: Ranking[] = [];

  constructor(private rankingsService: RankingsService) { }

  ngOnInit() {
    this.rankingsService.getRankings().subscribe(data => {
      this.rankings = data;
    });
  }
}
