import { createContext, Reducer, useContext, useEffect, useReducer } from 'react';
import { MAX_NUMBER_OF_QUESTIONS, MAX_NUMBER_OF_TAKE_QUESTIONS } from 'src/features/quiz/constants';

export type Question = {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  difficulty: string;
};

export type Questionnaire = {
  category: string;
  questions: Question[];
};

enum ACTION {
  QUIZ_LOADED = 'QUIZ_LOADED', //QUIZ_LOADED
  START = 'START',
  SELECT_CATEGORY = 'SELECT_CATEGORY',
  SELECT_DIFFICULTY = 'SELECT_DIFFICULTY',
  CHANGE_CATEGORY = 'CHANGE_CATEGORY', // UPDATE_CATEGORY
  SET_NUMBER_OF_QUESTIONS = 'SET_NUMBER_OF_QUESTIONS',
  GENERATE = 'GENERATE',
  BEGIN = 'BEGIN',
  NEW_ANSWER = 'NEW_ANSWER',
  NEXT_QUESTION = 'NEXT_QUESTION',
  FINISH = 'FINISH',
  RESTART = 'RESTART',
  TICK = 'TICK',
  REJECTED = 'REJECTED',
}

enum Difficulty {
  ALL = 'all',
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

type DifficultyKeys = keyof typeof Difficulty;
type DifficultyValues = (typeof Difficulty)[DifficultyKeys];

type State = {
  questionnaires: Questionnaire[];
  category: string;
  difficulty: DifficultyValues;
  questions: Question[];
  totalQuestions: number;
  takeQuestions: number;
  index: number;
  remaining: number;
  answer?: number | null;
  points: number;
  highscore: number;
  status:
    | 'ready'
    | 'for_processing'
    | 'generate'
    | 'begin'
    | 'active'
    | 'finished'
    | 'loading'
    | 'error';
  error: string;
};

type Actions =
  | { type: ACTION.QUIZ_LOADED; payload: Questionnaire[] }
  | { type: ACTION.SELECT_CATEGORY; payload: string }
  | { type: ACTION.REJECTED; payload: string };

const initialState: State = {
  questionnaires: [],
  category: '',
  difficulty: Difficulty.ALL,
  questions: [],
  totalQuestions: MAX_NUMBER_OF_QUESTIONS,
  takeQuestions: MAX_NUMBER_OF_TAKE_QUESTIONS,
  index: 0,
  remaining: 0,
  answer: null,
  points: 0,
  highscore: 0,
  status: 'loading',
  error: '',
};

const QuizContext = createContext<
  State & {
    selectCategory: (category: DifficultyValues) => void;
  }
>({ ...initialState, selectCategory: () => {} });

const reducer: Reducer<State, Actions> = (state, action): State => {
  switch (action.type) {
    case ACTION.QUIZ_LOADED:
      return {
        ...state,
        status: 'ready',
        questionnaires: action.payload,
      };
    case ACTION.REJECTED:
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };
    case ACTION.SELECT_CATEGORY:
      const found = state.questionnaires.find(question => question.category === action.payload);

      return {
        ...state,
        status: 'for_processing',
        category: action.payload,
        questions: found ? found.questions : [],
      };
    default:
      throw new Error('Unknown action type.');
  }
};

const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchQuestionnaires = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');
        const data = (await response.json()) as Questionnaire[];
        dispatch({ type: ACTION.QUIZ_LOADED, payload: data });
      } catch {
        dispatch({ type: ACTION.REJECTED, payload: 'There was an error loading data...' });
      }
    };
    fetchQuestionnaires();
  }, []);

  const selectCategory = (category: DifficultyValues) => {
    dispatch({ type: ACTION.SELECT_CATEGORY, payload: category });
  };

  return (
    <QuizContext.Provider value={{ ...state, selectCategory }}>{children}</QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error('QuizContext was used outside the QuizProvider');
  return context;
};

export { QuizProvider, useQuiz };
