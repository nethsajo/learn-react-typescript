export function Header({ title }: { title: string }) {
  return (
    <header className="flex w-full items-center justify-center bg-amber-600 px-4 py-8 font-monoton uppercase">
      <h1 className="word-spacing text-center text-3xl tracking-wide text-white sm:text-7xl">
        {title}
      </h1>
    </header>
  );
}
