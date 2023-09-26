export default function Order({ closeHour }: { closeHour: number }) {
  return (
    <div className="space-y-6">
      <p className="text-gray-700">
        We&apos;re open until {closeHour}:00. Come visit us or order online.
      </p>
      <button
        type="button"
        className="rounded-md bg-amber-500 px-4 py-2 font-semibold text-amber-50 transition-colors duration-300 ease-linear hover:bg-amber-600"
      >
        Order
      </button>
    </div>
  );
}
