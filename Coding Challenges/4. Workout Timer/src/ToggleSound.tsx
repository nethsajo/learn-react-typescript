import { Volume, VolumeX } from 'lucide-react';
import { memo, type Dispatch, type SetStateAction } from 'react';

type ToggleSoundProps = {
  allowSound: boolean;
  setAllowSound: Dispatch<SetStateAction<boolean>>;
};

export const ToggleSound = memo(function ToggleSound({
  allowSound,
  setAllowSound,
}: ToggleSoundProps) {
  return (
    <div className="mt-2 flex items-center  justify-center space-x-2 text-zinc-700">
      <span className="font-medium">Enable sound: </span>
      <button onClick={() => setAllowSound(allow => !allow)}>
        {allowSound ? <Volume /> : <VolumeX />}
      </button>
    </div>
  );
});
