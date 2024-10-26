import { createContext, Reducer, useContext, useEffect, useReducer } from 'react';
import {
  MAX_NUMBER_OF_QUESTIONS,
  MAX_NUMBER_OF_TAKE_QUESTIONS,
  SECONDS_PER_QUESTION,
} from 'src/features/quiz/constants';

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
  QUIZ_LOADED = 'QUIZ_LOADED',
  START = 'START',
  SELECT_CATEGORY = 'SELECT_CATEGORY',
  SELECT_DIFFICULTY = 'SELECT_DIFFICULTY',
  UPDATE_CATEGORY = 'UPDATE_CATEGORY',
  SET_QUESTION_COUNT = 'SET_QUESTION_COUNT ',
  GENERATE = 'GENERATE',
  BEGIN = 'BEGIN',
  ANSWER = 'ANSWER',
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

export const LEVELS: DifficultyValues[] = [
  Difficulty.ALL,
  Difficulty.EASY,
  Difficulty.MEDIUM,
  Difficulty.HARD,
];

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
  | { type: ACTION.UPDATE_CATEGORY }
  | { type: ACTION.SELECT_DIFFICULTY; payload: DifficultyValues }
  | { type: ACTION.SET_QUESTION_COUNT; payload: number | null }
  | { type: ACTION.GENERATE }
  | { type: ACTION.START }
  | { type: ACTION.ANSWER; payload: number | null }
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
    selectCategory: (category: string) => void;
    updateCategory: () => void;
    selectDifficulty: (level: DifficultyValues) => void;
    setQuestionCount: (count: number | null) => void;
    generate: () => void;
    start: () => void;
    onAnswer: (answer: number | null) => void;
  }
>({
  ...initialState,
  selectCategory: () => {},
  selectDifficulty: () => {},
  setQuestionCount: () => {},
  updateCategory: () => {},
  generate: () => {},
  start: () => {},
  onAnswer: () => {},
});

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
    case ACTION.UPDATE_CATEGORY:
      return {
        ...state,
        status: 'ready',
        category: '',
        questions: [],
        totalQuestions: MAX_NUMBER_OF_QUESTIONS,
        takeQuestions: MAX_NUMBER_OF_TAKE_QUESTIONS,
      };
    case ACTION.SELECT_DIFFICULTY:
      const questions = state.questions.filter(question => question.difficulty === action.payload);
      const length = Difficulty.ALL === action.payload ? state.questions.length : questions.length;

      return {
        ...state,
        difficulty: action.payload,
        totalQuestions: length,
        takeQuestions: length,
      };
    case ACTION.SET_QUESTION_COUNT:
      return {
        ...state,
        takeQuestions: action.payload ?? 1,
      };
    case ACTION.GENERATE:
      let questionnaires: Question[] = [];

      if (Difficulty.ALL === state.difficulty) {
        questionnaires = state.questions;
      } else {
        questionnaires = state.questions.filter(
          question => question.difficulty === state.difficulty
        );
      }

      return {
        ...state,
        status: 'begin',
        questions: questionnaires.slice(0, state.takeQuestions),
      };
    case ACTION.START:
      return {
        ...state,
        status: 'active',
        remaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    case ACTION.ANSWER:
      const question = state.questions.at(state.index) as Question;
      const isCorrect = question.correctOption === action.payload;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
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

  const selectCategory = (category: string) => {
    dispatch({ type: ACTION.SELECT_CATEGORY, payload: category });
  };

  const updateCategory = () => dispatch({ type: ACTION.UPDATE_CATEGORY });

  const selectDifficulty = (level: DifficultyValues) => {
    dispatch({ type: ACTION.SELECT_DIFFICULTY, payload: level });
  };

  const setQuestionCount = (count: number | null = null) => {
    dispatch({ type: ACTION.SET_QUESTION_COUNT, payload: count });
  };

  const generate = () => dispatch({ type: ACTION.GENERATE });

  const start = () => dispatch({ type: ACTION.START });

  const onAnswer = (answer: number | null) => dispatch({ type: ACTION.ANSWER, payload: answer });

  return (
    <QuizContext.Provider
      value={{
        ...state,
        selectCategory,
        updateCategory,
        selectDifficulty,
        setQuestionCount,
        generate,
        start,
        onAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) throw new Error('QuizContext was used outside the QuizProvider');
  return context;
};

export { QuizProvider, useQuiz };
