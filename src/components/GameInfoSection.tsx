import { useEffect, type FC, useState } from "react";

import type { GameDetails } from "./GameDetailsForm";
import { GameDetailsCard } from "~/components/GameDetailsCard";
import { PlayerCard } from "~/components/PlayerCard";
import { TurnHistoryCard } from "~/components/TurnHistoryCard";

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

  return (
    <div>
      <div>
        <GameDetailsCard />
        <PlayerCard
          namePlayerOne="Liene"
          namePlayerTwo="AI"
          scorePlayerOne={10}
          scorePlayerTwo={15}
          gameTimePlayerOne={gameDetails.gameDuration}
          gameTimePlayerTwo={gameDetails.gameDuration}
        />

        <TurnHistoryCard
          namePlayerOne="Liene"
          namePlayerTwo="AI"
          wordCountPlayerOne={5}
          wordCountPlayerTwo={7}
          wordsPlayedPlayerOne={["OneWord", "TwoWord", "ThreeWord"]}
          wordsPlayedPlayerTwo={["TwoWord", "ThreeWord", "FourWord"]}
        />
      </div>
    </div>
  );
};
