import Order from './Order';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="pb-8 text-center">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p className="text-center tracking-wider text-gray-600">
          We&apos;re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
