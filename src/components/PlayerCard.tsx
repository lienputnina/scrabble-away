import type { FC } from "react";

export interface PlayerCardInfo {
  playerName: string | null | undefined;
  score: number;
  timeLeft: number;
  turnTime: number;
}
export const PlayerCard: FC<PlayerCardInfo> = ({
  playerName,
  score,
  timeLeft,
  turnTime,
}) => {
  return (
    <div className="m-2 flex flex-col rounded border-2 border-slate-900 p-3">
      <p>{playerName}</p>
      <p>Score: {score}</p>
      <p>Time left: {timeLeft} minutes</p>
      <p>Turn time: {turnTime} minutes</p>
    </div>
  );
};
