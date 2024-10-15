export interface MessageProps {
  message: string;
}

export function Message({ message }: MessageProps) {
  return <p className="max-w-[240px] text-center">👋 {message}</p>;
}
