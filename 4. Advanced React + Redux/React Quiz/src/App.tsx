import { Reducer, useEffect, useReducer } from 'react';
import { Question } from 'shared/types/question';
import { QuizFinish } from './features/quiz/components/quiz-finish';
import { QuizHeader } from './features/quiz/components/quiz-header';
import { QuizLoader } from './features/quiz/components/quiz-loader';
import { QuizNext } from './features/quiz/components/quiz-next';
import { QuizProgress } from './features/quiz/components/quiz-progress';
import { QuizQuestion } from './features/quiz/components/quiz-question';
import { QuizStart } from './features/quiz/components/quiz-start';
import { QuizTimer } from './features/quiz/components/quiz-timer';
import { SECONDS_PER_QUESTION } from './features/quiz/constants';

// Define action types
export enum Type {
  DATA_RECEIVED = 'DATA_RECEIVED',
  DATA_FAILED = 'DATA_FAILED',
  START = 'START',
  NEW_ANSWER = 'NEW_ANSWER',
  NEXT_QUESTION = 'NEXT_QUESTION',
  FINISH = 'FINISH',
  RESTART = 'RESTART',
  TICK = 'TICK',
}

type ActionWithType<T extends keyof typeof Type, P = void> = {
  type: T;
  payload?: P;
};

export type Action =
  | ActionWithType<Type.DATA_RECEIVED, Question[]>
  | ActionWithType<Type.DATA_FAILED>
  | ActionWithType<Type.START, number>
  | ActionWithType<Type.NEW_ANSWER, number | null>
  | ActionWithType<Type.NEXT_QUESTION>
  | ActionWithType<Type.FINISH>
  | ActionWithType<Type.RESTART>
  | ActionWithType<Type.TICK>;

// Define state type
interface State {
  questions: Question[];
  index: number;
  remaining: number;
  answer?: number | null;
  points: number;
  highscore: number;
  status: 'ready' | 'active' | 'finished' | 'loading' | 'error';
}

const initialState: State = {
  questions: [],
  index: 0,
  remaining: 0,
  answer: null,
  points: 0,
  highscore: 0,
  status: 'loading',
};

// Define reducer function
const reducer: Reducer<State, Action> = (state, action): State => {
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
    case Type.START:
      return {
        ...state,
        status: 'active',
        remaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case Type.NEW_ANSWER:
      const question = state.questions.at(state.index) as Question;
      const isCorrect = question.correctOption === action.payload;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    case Type.NEXT_QUESTION:
      return { ...state, index: state.index + 1, answer: null };
    case Type.FINISH:
      return {
        ...state,
        status: 'finished',
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    case Type.RESTART:
      return { ...initialState, questions: state.questions, status: 'ready' };
    case Type.TICK:
      return {
        ...state,
        remaining: state.remaining - 1,
        status: state.remaining === 0 ? 'finished' : state.status,
      };
    default:
      throw new Error('Unknown action type');
  }
};

export default function App() {
  const [{ status, questions, index, remaining, answer, points, highscore }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  const numberOfQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((current: number, question: Question) => {
    return current + question.points;
  }, 0);

  return (
    <div className="mx-auto my-12 flex max-w-lg flex-col justify-center space-y-8 px-4 md:max-w-2xl">
      <QuizHeader />
      {status === 'loading' && <QuizLoader />}
      {status === 'error' && (
        <div className="text-center">There was an error fetching questions...</div>
      )}
      {status === 'ready' && (
        <QuizStart numberOfQuestions={numberOfQuestions} dispatch={dispatch} />
      )}
      {status === 'active' && (
        <>
          <QuizProgress
            count={index}
            numberOfQuestions={numberOfQuestions}
            maxPossiblePoints={maxPossiblePoints}
            points={points}
            answer={answer}
          />
          <div className="flex flex-col space-y-6">
            <QuizQuestion
              count={index}
              question={questions[index]!}
              dispatch={dispatch}
              answer={answer}
            />
            <footer className="flex items-center justify-between">
              <QuizTimer remaining={remaining} dispatch={dispatch} />
              <QuizNext
                index={index}
                numberOfQuestions={numberOfQuestions}
                answer={answer}
                dispatch={dispatch}
              />
            </footer>
          </div>
        </>
      )}
      {status === 'finished' && (
        <QuizFinish
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
