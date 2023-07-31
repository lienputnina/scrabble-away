import { Title, TitleLevel } from "@liene-putnina/react-components-for-you";
import type { FC } from "react";

export interface PlayerCardInfo {
  namePlayerOne: string | null | undefined;
  namePlayerTwo: string | null | undefined;
  scorePlayerOne: number;
  scorePlayerTwo: number;
  gameTimePlayerOne: number | string;
  gameTimePlayerTwo: number | string;
}
export const PlayerCard: FC<PlayerCardInfo> = ({
  namePlayerOne,
  namePlayerTwo,
  scorePlayerOne,
  scorePlayerTwo,
  gameTimePlayerOne,
  gameTimePlayerTwo,
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
          <p>Player name: {namePlayerOne}</p>
          <p>Score: {scorePlayerOne}</p>
          <p>Time left: {gameTimePlayerOne} minutes</p>
        </div>
        <div>
          <p>Player name: {namePlayerTwo}</p>
          <p>Score: {scorePlayerTwo}</p>
          <p>Time left: {gameTimePlayerTwo} minutes</p>
        </div>
      </div>
    </div>
  );
};
