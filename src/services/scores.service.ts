import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { scoresModel } from "../models/scores";

@Injectable({
  providedIn: "root",
})

export class ScoresService {
  URI_API = "https://scutellaria-api.glitch.me/"

  constructor(private http: HttpClient) {}


  getScoreService(): Observable<scoresModel[]> {
    const allDocumentsJSON = this.http.get<scoresModel[]>(
      this.URI_API + "getScores"
    );
    return allDocumentsJSON;
  }

}
