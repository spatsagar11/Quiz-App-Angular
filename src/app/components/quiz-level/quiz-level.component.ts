import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service'
import {Router, ActivatedRoute} from '@angular/router';
import { MTopic } from '../../services/topics'
@Component({
  selector: 'app-quiz-level',
  templateUrl: './quiz-level.component.html',
  styleUrls: ['./quiz-level.component.css']
})
export class QuizLevelComponent implements OnInit {
  topic: any;
  data1: any;
  data2: any;

  constructor(private _qs: QuizService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      
      this._qs.getTopics().subscribe(res => {
          this.data1 = res;
          
          for(let i=0; i < this.data1.length; i++) {
            this.data2 = this.data1[i];
            if(this.data2.topicId == id) {
              this.topic = Array.of(this.data2);
            }
          }

      });
    });

  }
}
