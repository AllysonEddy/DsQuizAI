import { Answer, Question } from '../components/QuizForm';

export const calculateScore = (
  questions: Question[],
  userAnswers: Answer[],
  difficulty: string,
): number => {
  let score = 0;
  let scoreMultiplier = 1;

  // Define score multiplier based on difficulty
  switch (difficulty) {
    case 'easy':
      scoreMultiplier = 1;
      break;
    case 'medium':
      scoreMultiplier = 2;
      break;
    case 'hard':
      scoreMultiplier = 4;
      break;
    default:
      scoreMultiplier = 1;
  }

  questions.forEach((question) => {
    const userAnswer = userAnswers.find(
      (answer) => answer.question === question.question
    );

    if (userAnswer) {
      if (userAnswer.answer === question.answer) {
        score += 10 * scoreMultiplier;
      }
    }
  });

  return score;
};
