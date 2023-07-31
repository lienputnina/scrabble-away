import { useEffect, type FC, useState } from "react";

import type { GameDetails } from "./GameDetailsForm";
import { GameDetailsCard } from "~/components/GameDetailsCard";
import { PlayerCard } from "~/components/PlayerCard";
import { TurnHistoryCard } from "~/components/TurnHistoryCard";

import type { Option } from "@liene-putnina/react-components-for-you";

export const GameInfoSection: FC = () => {
  const [gameDetails, setGameDetails] = useState<GameDetails>({});

  const initialGameDuration = gameDetails.gameDuration || 0;
  const initialCountdown = initialGameDuration * 60;

  const [countdownPlayerOne, setCountdownPlayerOne] =
    useState<number>(initialCountdown);
  const [countdownPlayerTwo, setCountdownPlayerTwo] =
    useState<number>(initialCountdown);

  const getGameDetails = () => {
    const storedGameDuration = sessionStorage.getItem("GameDuration");
    const storedNumberOfOpponents = sessionStorage.getItem("NumberOfOpponents");
    const storedDifficultyLevel = sessionStorage.getItem("DifficultyLevel");

    setGameDetails({
      gameDuration: storedGameDuration
        ? Number(JSON.parse(storedGameDuration))
        : undefined,
      numberOfOpponents: storedNumberOfOpponents
        ? Number(JSON.parse(storedNumberOfOpponents))
        : undefined,
      selectedOption: storedDifficultyLevel
        ? (JSON.parse(storedDifficultyLevel) as Option)
        : undefined,
    });
  };

  const formatTime = (timeInSeconds: number): string => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    getGameDetails();

    setCountdownPlayerOne(initialCountdown);
    setCountdownPlayerTwo(initialCountdown);

    const interval = setInterval(() => {
      setCountdownPlayerOne((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
      setCountdownPlayerTwo((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [initialCountdown]);

  return (
    <div>
      <div>
        <GameDetailsCard />
        <PlayerCard
          namePlayerOne="Liene"
          namePlayerTwo="AI"
          scorePlayerOne={10}
          scorePlayerTwo={15}
          gameTimePlayerOne={formatTime(countdownPlayerOne)}
          gameTimePlayerTwo={formatTime(countdownPlayerTwo)}
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
