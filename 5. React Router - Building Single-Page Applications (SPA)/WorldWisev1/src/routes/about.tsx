import { PageLayout } from '@/components/layout/page';

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center justify-center gap-16 pt-8 text-center sm:h-full sm:grid-cols-2">
        <img
          src="/img-1.jpg"
          alt="A man with dog overlooking mountain with sunset"
          className="w-full rounded-md"
        />
        <div className="flex flex-col space-y-8 text-left sm:mt-0">
          <h2 className="text-4xl font-medium text-slate-100 sm:text-balance">About WorldWise.</h2>
          <div className="space-y-6 text-balance text-base text-slate-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero
              culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum,
              placeat debitis, laboriosam at fuga perspiciatis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero
              sunt expedita ratione iusto, magni, id sapiente sequi officiis et.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
