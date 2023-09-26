export default function Header({ title }: { title: string }) {
  return (
    <header className="self-stretch">
      <h1 className="relative block w-full text-center text-3xl font-bold uppercase leading-none tracking-wider text-amber-500 md:text-[52px] md:leading-none">
        {title}
      </h1>
    </header>
  );
}
