import type { FC } from "react";

export interface TurnHistory {
  playerName: string | null | undefined;
  wordCount: number;
  wordsPlayed: string[];
}
export const TurnHistoryCard: FC<TurnHistory> = ({
  playerName,
  wordCount,
  wordsPlayed,
}) => {
  return (
    <div className="mx-">
      <p>{playerName}</p>
      <div>
        <p>Words played: {wordCount}</p>
        <p>{wordsPlayed}</p>
      </div>
    </div>
  );
};
