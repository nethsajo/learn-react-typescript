type Props = {
  language: string;
  emoji: string;
  color: string;
};

export default function Skill({ language, emoji, color }: Props) {
  return (
    <div className={`rounded-full px-3 py-1 text-sm font-medium text-white ${color}`}>
      <span>{language}</span>
      <span>{emoji}</span>
      {/* <span>{emoji[skill.level]}</span> */}
    </div>
  );
}
