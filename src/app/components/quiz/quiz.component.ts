import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service'
import {Router, ActivatedRoute} from '@angular/router';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  
  data: any[] = [];
  myradio: any;
  isCorrect: boolean = false;
  isWrong: boolean = false;
  count:number = 0;
  sub: any;
  ind: number = 0;
constructor( private _qs: QuizService, private router:ActivatedRoute, private route:Router) {

   } 

  ngOnInit() {
    let data1: any;
    let data2: any;

    this.router.params.subscribe((params) => {
      let id = params['id'];
      let level = params['level'];

      this._qs.getBeginnerQuestions().subscribe(res => {
          data1 = res;
          
          for(let i=0; i < data1.length; i++) {
            data2 = data1[i];
            if(data2.topicId == id && data2.category == level) {
              this.data.push(data2);
            }
          }

          return this.data;

      });

      this._qs.getIntermediateQuestions().subscribe(res => {
        data1 = res;
        
        for(let i=0; i < data1.length; i++) {
          data2 = data1[i];
          if(data2.topicId == id && data2.category == level) {
            this.data.push(data2);
          }
        }

        return this.data;

    });

    this._qs.getDifficultQuestions().subscribe(res => {
      data1 = res;
      
      for(let i=0; i < data1.length; i++) {
        data2 = data1[i];
        if(data2.topicId == id && data2.category == level) {
          this.data.push(data2);
        }
      }

      return this.data;

  });
    });
 
  }

  showAnswer(value, answer){
  
    if(value === answer){
      this.isCorrect = true;
      this.isWrong = false;
      this.count++; 
    
    } else {
      this.isWrong = true;
      this.isCorrect = false;
      
    }
  }

  next() {
    this.ind++;
    this.isCorrect = false;
    this.isWrong = false;
  }
  prev() {
    if(this.ind == 0){
      this.ind = 1;
    }
    this.ind--;
    this.isCorrect = false;
    this.isWrong = false;
  }

}
