import {
  Title,
  TitleAlignment,
  TitleLevel,
} from "@liene-putnina/react-components-for-you";
import type { FC } from "react";

export interface TurnHistory {
  namePlayerOne: string | null | undefined;
  namePlayerTwo: string | null | undefined;
  wordCountPlayerOne: number;
  wordCountPlayerTwo: number;
  wordsPlayedPlayerOne: string[];
  wordsPlayedPlayerTwo: string[];
}
export const TurnHistoryCard: FC<TurnHistory> = ({
  namePlayerOne,
  namePlayerTwo,
  wordCountPlayerOne,
  wordCountPlayerTwo,
  wordsPlayedPlayerOne,
  wordsPlayedPlayerTwo,
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
          <p>{namePlayerOne}</p>
          <div>
            <p>Words played: {wordCountPlayerOne}</p>
            <p>{wordsPlayedPlayerOne}</p>
          </div>
        </div>
        <div>
          <p>{namePlayerTwo}</p>
          <div>
            <p>Words played: {wordCountPlayerTwo}</p>
            <p>{wordsPlayedPlayerTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
