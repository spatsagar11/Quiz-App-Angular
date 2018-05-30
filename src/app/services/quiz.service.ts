import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class QuizService {

  constructor(private _http: Http) { }
  
  getTopics() {
    return this._http.get('assets/data.json')
    .map(res => res.json());
  }

  getBeginnerQuestions() {
    return this._http.get('assets/beginner.json')
      .map(res => res.json());
  }

  getIntermediateQuestions() {
    return this._http.get('assets/intermediate.json')
      .map(res => res.json());
  }

  getDifficultQuestions() {
    return this._http.get('assets/difficult.json')
      .map(res => res.json());
  }

}
