type Props = {
  title: string;
};

export function MovieTitle({ title }: Props) {
  return (
    <div className="flex items-center">
      <h1 className="max-w-4xl text-left text-3xl font-extrabold tracking-tight text-gray-100 md:text-6xl">
        {title}
      </h1>
    </div>
  );
}
