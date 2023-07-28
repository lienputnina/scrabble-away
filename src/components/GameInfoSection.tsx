import { GameDetailsCard } from "~/components/GameDetailsCard";
import { useEffect, type FC, useState } from "react";

import {
  Title,
  TitleAlignment,
  TitleLevel,
} from "@liene-putnina/react-components-for-you";

import { PlayerCard } from "~/components/PlayerCard";
import { TurnHistoryCard } from "~/components/TurnHistoryCard";

import { useUser } from "@clerk/nextjs";
import type { GameDetails } from "./GameDetailsForm";
import type { Option } from "@liene-putnina/react-components-for-you";

export const GameInfoSection: FC = () => {
  const [gameDetails, setGameDetails] = useState<GameDetails>({});

  useEffect(() => {
    const storedGameDuration = sessionStorage.getItem("GameDuration");
    const storedNumberOfOpponents = sessionStorage.getItem("NumberOfOpponents");
    const storedTurnTimeLimit = sessionStorage.getItem("TurnTimeLimit");
    const storedDifficultyLevel = sessionStorage.getItem("DifficultyLevel");

    setGameDetails({
      gameDuration: storedGameDuration
        ? Number(JSON.parse(storedGameDuration))
        : undefined,
      numberOfOpponents: storedNumberOfOpponents
        ? Number(JSON.parse(storedNumberOfOpponents))
        : undefined,
      turnTimeLimit: storedTurnTimeLimit
        ? Number(JSON.parse(storedTurnTimeLimit))
        : undefined,
      selectedOption: storedDifficultyLevel
        ? (JSON.parse(storedDifficultyLevel) as Option)
        : undefined,
    });
  }, []);

  const user = useUser();
  // console.log(user.fullName);
  return (
    <div>
      <div>
        <GameDetailsCard />
        <PlayerCard
          turnTime={gameDetails.turnTimeLimit}
          playerOneName="Liene"
          playerTwoName="AI"
          playerOneScore={10}
          playerTwoScore={15}
        />
        <div className="mt-4 flex h-full w-full flex-col rounded border-2 border-slate-900 p-3">
          <Title
            level={TitleLevel.TWO}
            alignment={TitleAlignment.LEFT}
            className="mx-1.5"
            style={{ fontSize: "30px", lineHeight: "10px" }}
          >
            Turn history
          </Title>
          <TurnHistoryCard
            playerName="Liene"
            wordCount={5}
            wordsPlayed={["OneWord", "TwoWord", "ThreeWord"]}
          />
          <TurnHistoryCard
            playerName="AI"
            wordCount={7}
            wordsPlayed={["FourWord", "FiveWord", "SixWord"]}
          />
        </div>
      </div>
    </div>
  );
};
