import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html'
})
export class QuizListComponent {
  quizzes = [
    { id: 1, title: 'Qual personagem de Friends você é?', image: 'friends.jpg' },
    { id: 2, title: 'Teste: Que tipo de programador você é?', image: 'code.jpg' }
  ];
}
