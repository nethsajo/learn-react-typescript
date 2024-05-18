import { Reducer, useEffect, useReducer } from 'react';
import { Question } from 'shared/types/question';
import { QuizFooter } from './features/quiz/components/quiz-footer';
import { QuizHeader } from './features/quiz/components/quiz-header';
import { QuizList } from './features/quiz/components/quiz-list';
import { QuizLoader } from './features/quiz/components/quiz-loader';
import { QuizProgress } from './features/quiz/components/quiz-progress';
import { QuizStart } from './features/quiz/components/quiz-start';

// Define action types
enum Type {
  DATA_RECEIVED = 'DATA_RECEIVED',
  DATA_FAILED = 'DATA_FAILED',
}

type ActionWithType<T extends keyof typeof Type, P = undefined> = {
  type: T;
  payload?: P;
};

type Action = ActionWithType<Type.DATA_RECEIVED, Question[]> | ActionWithType<Type.DATA_FAILED>;

// Define state type
interface State {
  questions: Question[];
  status: 'ready' | 'active' | 'finished' | 'loading' | 'error';
}

const initialState: State = {
  questions: [],
  status: 'loading',
};

// Define reducer function
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case Type.DATA_RECEIVED:
      return {
        ...state,
        status: 'ready',
        questions: action.payload ?? [],
      };
    case Type.DATA_FAILED:
      return {
        ...state,
        status: 'error',
      };
    default:
      throw new Error('Unknown action type');
  }
};

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8000/questions');
        const data = await response.json();
        dispatch({ type: Type.DATA_RECEIVED, payload: data });
      } catch (error) {
        dispatch({ type: Type.DATA_FAILED });
      }
    };

    fetchQuestions();
  }, []);

  const maxPossiblePoints = questions.reduce((current, question) => {
    return current + question.points;
  }, 0);

  return (
    <div className="mx-auto my-12 flex max-w-lg flex-col justify-center space-y-8 px-4 md:max-w-2xl">
      <QuizHeader />
      {status === 'loading' && <QuizLoader />}
      {status === 'error' && (
        <div className="text-center">There was an error fetching questions...</div>
      )}
      {status === 'ready' && <QuizStart numberOfQuestions={questions.length} />}
      {status === 'active' && (
        <>
          <QuizProgress
            numberOfQuestions={questions.length}
            maxPossiblePoints={maxPossiblePoints}
          />
          <div className="flex flex-col space-y-6">
            <QuizList />
            <QuizFooter />
          </div>
        </>
      )}
    </div>
  );
}
