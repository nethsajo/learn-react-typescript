type Props = {
  language: string;
  difficulty: string;
  total: number;
};

export function QuizBegin({ language, difficulty, total }: Props) {
  return (
    <p>
      {language}, {difficulty}, {total}
    </p>
  );
}
