import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: QuizListComponent },
      { path: 'quiz/:id', component: QuizComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
