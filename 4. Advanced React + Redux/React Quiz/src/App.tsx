import { QuizFooter } from './features/quiz/components/quiz-footer';
import { QuizHeader } from './features/quiz/components/quiz-header';
import { QuizList } from './features/quiz/components/quiz-list';

export default function App() {
  return (
    <div className="mx-auto my-12 flex max-w-lg flex-col justify-center space-y-8 px-4 md:max-w-2xl">
      <QuizHeader />
      <div className="flex flex-col space-y-4">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-700">
          <div
            className="absolute h-full bg-blue-500 transition-all duration-300"
            style={{ width: '15%' }}
          />
        </div>
        <div className="flex justify-between">
          <span>
            Question <span className="font-bold">2</span> / 15
          </span>
          <span>
            <span className="font-bold">10</span> / 280 points
          </span>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <QuizList />
        <QuizFooter />
      </div>
    </div>
  );
}
