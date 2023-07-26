import type { FC } from "react";
import { useEffect, useState } from "react";

import type { GameDetails } from "~/components/GameDetailsForm";
import { Title, TitleLevel } from "@liene-putnina/react-components-for-you";
import type { Option } from "@liene-putnina/react-components-for-you";

export const GameDetailsCard: FC = () => {
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
      <Title level={TitleLevel.FOUR}>Game details</Title>
      <div className="info-board">
        <p>Game duration: {gameDetails.gameDuration}</p>
        <p>Number of opponents:{gameDetails.numberOfOpponents}</p>
        <p>Turn time: {gameDetails.turnTimeLimit} minutes</p>
        <p>Difficulty: {gameDetails.selectedOption?.value}</p>
      </div>
    </div>
  );
};
