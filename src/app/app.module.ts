import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopicsComponent } from './components/topics/topics.component';
import { QuizLevelComponent } from './components/quiz-level/quiz-level.component';
import { QuizComponent } from './components/quiz/quiz.component';

import { QuizService } from './services/quiz.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TopicsComponent,
    QuizLevelComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
