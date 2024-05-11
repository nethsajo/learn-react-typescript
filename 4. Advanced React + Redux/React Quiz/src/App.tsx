import { Reducer, useEffect, useReducer } from 'react';
import { Question } from 'shared/types/question';
import { QuizFooter } from './features/quiz/components/quiz-footer';
import { QuizHeader } from './features/quiz/components/quiz-header';
import { QuizList } from './features/quiz/components/quiz-list';

// Define action types
enum Type {
  DATA_RECEIVED = 'DATA_RECEIVED',
  DATA_FAILED = 'DATA_FAILED',
}

type ActionWithType<T extends keyof typeof Type, P = void> = {
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
        questions: action.payload || [],
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('http://localhost:8000/questions');
        const data = await response.json();
        dispatch({ type: Type.DATA_RECEIVED, payload: data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

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
