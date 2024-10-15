import { PageLayout } from '@/components/layout/page';

export default function PricingPage() {
  return (
    <PageLayout>
      <section className="mx-auto grid max-w-4xl grid-cols-1 items-center justify-center gap-8 pt-8 text-center sm:h-full sm:grid-cols-2">
        <div className="flex flex-col space-y-8 text-left sm:mt-0">
          <h2 className="text-4xl font-medium text-slate-100 sm:text-balance">
            Simple pricing. Just $9 month.
          </h2>
          <p className="text-base text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia
            iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.
          </p>
        </div>
        <img
          src="/img-2.jpg"
          alt="Overview of a large city with skyscrapers"
          className="w-full rounded-md"
        />
      </section>
    </PageLayout>
  );
}
