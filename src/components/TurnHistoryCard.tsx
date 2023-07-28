import {
  Title,
  TitleAlignment,
  TitleLevel,
} from "@liene-putnina/react-components-for-you";
import type { FC } from "react";

export interface TurnHistory {
  playerOneName: string | null | undefined;
  playerTwoName: string | null | undefined;
  playerOneWordCount: number;
  playerTwoWordCount: number;
  playerOneWordsPlayed: string[];
  playerTwoWordsPlayed: string[];
}
export const TurnHistoryCard: FC<TurnHistory> = ({
  playerOneName,
  playerTwoName,
  playerOneWordCount,
  playerTwoWordCount,
  playerOneWordsPlayed,
  playerTwoWordsPlayed,
}) => {
  return (
    <div className="mt-4 flex h-full w-full flex-col rounded border-2 border-slate-900 px-2 py-3 pb-3 pt-5">
      <Title
        level={TitleLevel.TWO}
        alignment={TitleAlignment.LEFT}
        className="mx-1.5"
        style={{ fontSize: "30px", lineHeight: "10px" }}
      >
        Turn history
      </Title>

      <div className="mx-2">
        <div>
          <p>{playerOneName}</p>
          <div>
            <p>Words played: {playerOneWordCount}</p>
            <p>{playerOneWordsPlayed}</p>
          </div>
        </div>
        <div>
          <p>{playerTwoName}</p>
          <div>
            <p>Words played: {playerTwoWordCount}</p>
            <p>{playerTwoWordsPlayed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
