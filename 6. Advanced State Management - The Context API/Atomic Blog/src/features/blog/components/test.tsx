import { useState } from 'react';

function SlowComponent() {
  // If this is too slow on your matching, reduce the length
  const words = Array.from({ length: 10000 }, () => 'WORD');

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {words.map((word, i) => (
        <li key={i}>
          {i + 1}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <h1>Slow Counter?!?</h1>
      <button onClick={() => setCount(count => count + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export function Test() {
  // const [count, setCount] = useState(0);

  // return (
  //   <div className="">
  //     <h1>Slow Counter?!?</h1>
  //     <button onClick={() => setCount(count => count + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );

  // React will no longer re-render the SlowComponent
  // The SlowComponent has this time passed in as a children prop
  // It means the component was actually already created before the Counter component re-rendered
  // Therefore, there's no way in which the SlowComponent could have been affected by the state change in the Counter component
  // When clicking the increase button the Counter will be re-rendered (state changed), but the SlowComponent has already been created before
  // So it cannot be affected by the state update of the Counter component

  return (
    <div className="">
      <h1>Slow Counter?!?</h1>
      <Counter>
        <SlowComponent />
      </Counter>
    </div>
  );
}
