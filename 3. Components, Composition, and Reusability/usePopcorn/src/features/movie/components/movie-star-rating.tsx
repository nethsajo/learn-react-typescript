import { useState } from 'react';

import { MovieStar } from './movie-star';

type Props = {
  maxRating?: number;
  defaultRating?: number;
  color?: string;
  size?: number;
  messages?: Array<string>;
  className?: string;
  onSetRating: (rating: number) => void;
};

export function MovieStarRating({
  maxRating = 5,
  defaultRating = 0,
  color = '#fcc419',
  size = 24,
  onSetRating,
}: Props) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleRate = (rate: number) => {
    setRating(rate);
    onSetRating(rate);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-300">How would you rate this movie?</span>
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, i) => (
          <MovieStar
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRate(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
    </div>
  );
}
