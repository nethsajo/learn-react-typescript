import { useQuiz } from 'shared/contexts/quiz';
import { QuizBegin } from './features/quiz/components/quiz-begin';
import { QuizDifficulty } from './features/quiz/components/quiz-difficulty';
import { QuizFinish } from './features/quiz/components/quiz-finish';
import { QuizHeader } from './features/quiz/components/quiz-header';
import { QuizLoader } from './features/quiz/components/quiz-loader';
import { QuizNext } from './features/quiz/components/quiz-next';
import { QuizProgress } from './features/quiz/components/quiz-progress';
import { QuizQuestion } from './features/quiz/components/quiz-question';
import { QuizStart } from './features/quiz/components/quiz-start';
import { QuizTimer } from './features/quiz/components/quiz-timer';

export default function App() {
  const { status, error } = useQuiz();

  return (
    <div className="mx-auto my-24 flex max-w-lg flex-col justify-center space-y-8 px-4 md:max-w-2xl">
      <QuizHeader />
      {status === 'loading' && <QuizLoader />}
      {status === 'error' && <div className="text-center">{error}</div>}
      {status === 'ready' && <QuizStart />}
      {status === 'for_processing' && <QuizDifficulty />}
      {status === 'begin' && <QuizBegin />}
      {status === 'active' && (
        <>
          <QuizProgress />
          <div className="flex flex-col space-y-6">
            <QuizQuestion />
            <footer className="flex items-center justify-between">
              <QuizTimer />
              <QuizNext />
            </footer>
          </div>
        </>
      )}
      {status === 'finished' && <QuizFinish />}
    </div>
  );
}
