import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {
  currentQuestion = 0;
  score = 0;
  quiz = {
    questions: [
      {
        text: 'Como você reagiria a um bug?',
        options: [
          { text: 'Choraria no banheiro', value: 1 },
          { text: 'Ficaria debugando até resolver', value: 2 }
        ]
      }
    ],
    results: [
      { minScore: 1, maxScore: 1, text: 'Você é iniciante!' },
      { minScore: 2, maxScore: 2, text: 'Você é experiente!' }
    ]
  };

  selectAnswer(value: number) {
    this.score += value;
    this.currentQuestion++;
  }

  get result() {
    return this.quiz.results.find(r => 
      this.score >= r.minScore && this.score <= r.maxScore
    );
  }
}
