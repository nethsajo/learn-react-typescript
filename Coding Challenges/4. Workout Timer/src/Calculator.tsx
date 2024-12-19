import { memo, useEffect, useState } from 'react';
import ClickSound from './ClickSound.m4a';
import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import { Select } from './components/ui/select';
import { Slider } from './components/ui/slider';
import { type Workout } from './types/workout';

type CalculatorProps = {
  workouts: Workout[];
  allowSound: boolean;
};

export const Calculator = memo(function Calculator({ workouts, allowSound }: CalculatorProps) {
  const [number, setNumber] = useState(workouts[0].numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const [duration, setDuration] = useState(0);

  // const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  // const playSound = useCallback(
  //   function () {
  //     if (!allowSound) return;
  //     const sound = new Audio(ClickSound);
  //     sound.play();
  //   },
  //   [allowSound]
  // );

  const handleIncrementDuration = () => {
    setDuration(duration => Math.floor(duration) + 1);
  };

  const handleDecrementDuration = () => {
    setDuration(duration => (duration > 1 ? Math.ceil(duration) - 1 : 0));
  };

  useEffect(() => {
    setDuration((number * sets * speed) / 60 + (sets - 1) * durationBreak);
  }, [number, sets, speed, durationBreak]);

  useEffect(() => {
    const playSound = function () {
      if (!allowSound) return;
      const sound = new Audio(ClickSound);
      sound.play();
    };
    playSound();
  }, [duration, allowSound]);

  return (
    <div className="mt-6 grid gap-4">
      <div className="grid grid-cols-[150px_1fr] items-center">
        <Label htmlFor="workout" className="text-left font-semibold text-zinc-700">
          Type of workout
        </Label>
        <Select name="workout" variant="outline" onChange={e => setNumber(Number(e.target.value))}>
          {workouts.map((workout, index) => (
            <option key={index} value={workout.numExercises}>
              {workout.name} ({workout.numExercises} exercises)
            </option>
          ))}
        </Select>
      </div>
      <div className="grid grid-cols-[150px_1fr] items-center">
        <Label htmlFor="sets" className="text-left font-semibold text-zinc-700">
          How many sets?
        </Label>
        <div className="flex items-center space-x-4">
          <Slider
            name="sets"
            min={1}
            max={5}
            value={sets}
            onChange={e => setSets(Number(e.target.value))}
          />
          <span>{sets}</span>
        </div>
      </div>
      <div className="grid grid-cols-[150px_1fr] items-center">
        <Label htmlFor="speed" className="text-left font-semibold text-zinc-700">
          How fast are you?
        </Label>
        <div className="flex items-center space-x-4">
          <Slider
            name="speed"
            min={30}
            max={180}
            step={30}
            value={speed}
            onChange={e => setSpeed(Number(e.target.value))}
          />
          <span>{speed} sec/exercise</span>
        </div>
      </div>
      <div className="grid grid-cols-[150px_1fr] items-center">
        <Label htmlFor="break" className="text-left font-semibold text-zinc-700">
          Break length
        </Label>
        <div className="flex items-center space-x-4">
          <Slider
            name="break"
            min={1}
            max={10}
            value={durationBreak}
            onChange={e => setDurationBreak(Number(e.target.value))}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-6 rounded-sm bg-zinc-200/65 p-4">
        <Button className="w-9 rounded-full p-0 text-base" onClick={handleDecrementDuration}>
          –
        </Button>
        <p className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-5xl font-extrabold text-transparent">
          {mins < 10 && '0'}
          {mins}:{seconds < 10 && '0'}
          {seconds}
        </p>
        <Button className="w-9 rounded-full p-0 text-base" onClick={handleIncrementDuration}>
          +
        </Button>
      </div>
    </div>
  );
});
