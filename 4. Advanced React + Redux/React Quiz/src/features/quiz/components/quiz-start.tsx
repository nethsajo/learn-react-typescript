import { Dispatch } from 'react';
import CSS3Logo from 'shared/assets/css3.svg?react';
import HTML5Logo from 'shared/assets/html5.svg?react';
import JavaScriptLogo from 'shared/assets/javascript.svg?react';
import ReactLogo from 'shared/assets/react.svg?react';
import TypeScriptLogo from 'shared/assets/typescript.svg?react';
import { Action, Type } from 'src/App';
import { LANGUAGES } from '../constants';

type Props = {
  numberOfQuestions: number;
  dispatch: Dispatch<Action>;
};

const languages = {
  html5: HTML5Logo,
  css3: CSS3Logo,
  javascript: JavaScriptLogo,
  typescript: TypeScriptLogo,
  react: ReactLogo,
};

export function QuizStart({ numberOfQuestions, dispatch }: Props) {
  return (
    <div className="space-y-8 text-center">
      <h2 className="mb-2 text-base text-slate-300 sm:text-xl">
        <strong className="text-blue-300">Ninjas</strong>, unite! Time to conquer the untamed
        frontiers of HTML, CSS, JavaScript, TypeScript, and React. Prove your front-end mastery
        starts now!
      </h2>
      <div className="space-y-6">
        <p className="text-slate-400">Select a language to start your mastery!</p>
        <div className="flex items-center justify-center space-x-2">
          {LANGUAGES.map((language, index) => {
            const LanguageLogo = languages[language];

            return (
              <button
                key={index}
                type="button"
                className="flex items-center space-x-2 rounded-full bg-slate-600/50 px-4 py-1 text-sm text-slate-300 transition-colors duration-300 hover:bg-blue-500 active:bg-blue-600"
                onClick={() => dispatch({ type: Type.SELECT_CATEGORY, payload: language })}
              >
                <span className="font-medium uppercase">{language}</span>
                <LanguageLogo className="fill-current" />
              </button>
            );
          })}
        </div>
      </div>
      {/* s */}
    </div>
  );
}
