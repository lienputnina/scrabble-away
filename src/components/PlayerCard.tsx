import { Title, TitleLevel } from "@liene-putnina/react-components-for-you";
import type { FC } from "react";

export interface PlayerCardInfo {
  playerOneName: string | null | undefined;
  playerTwoName: string | null | undefined;
  playerOneScore?: number;
  playerTwoScore?: number;
  turnTime: number | undefined;
}
export const PlayerCard: FC<PlayerCardInfo> = ({
  playerOneName,
  playerTwoName,
  playerOneScore,
  playerTwoScore,
  turnTime,
}) => {
  return (
    <div className="flex w-full flex-col rounded border-2 border-slate-900 px-2 py-3 pb-3 pt-5">
      <Title
        level={TitleLevel.TWO}
        className="mx-1.5"
        style={{ fontSize: "30px", lineHeight: "10px" }}
      >
        Players
      </Title>
      <div className="mx-2 flex-row">
        <div className="mb-3">
          <p>Player name: {playerOneName}</p>
          <p>Score: {playerOneScore}</p>
          <p>Turn time: {turnTime} minutes</p>
        </div>
        <div>
          <p>Player name: {playerTwoName}</p>
          <p>Score: {playerTwoScore}</p>
          <p>Turn time: {turnTime} minutes</p>
        </div>
      </div>
    </div>
  );
};
