export default function Header({ title }: { title: string }) {
  return (
    <header className="self-stretch">
      <h1 className="relative block w-full text-center text-3xl font-bold uppercase leading-none text-amber-500 before:absolute before:left-0 before:top-[50%] before:block before:h-[2px] before:w-0 before:bg-amber-500 before:content-[''] after:absolute after:right-0 after:top-[50%] after:block after:h-[2px] after:w-0 after:bg-amber-500 after:content-[''] sm:text-3xl sm:tracking-[7px] before:sm:w-[40px] after:sm:w-[40px] md:text-[52px] md:leading-none">
        {title}
      </h1>
    </header>
  );
}
