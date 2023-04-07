import { Component, OnInit } from '@angular/core';
import { ScoresService } from "../services/scores.service";
import { scoresModel } from "../models/scores";

import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  scoreList: scoresModel[] = [];

  constructor(
    private service: ScoresService
  ) { }

  ngOnInit(): void {
    this.getScores()
  }
  getScores() {
    this.service.getScoreService().subscribe(data => {
      console.log(data)
      this.scoreList = data.sort((a, b) => parseFloat(a.score) - parseFloat(b.score)).reverse()
    })
  }

}
