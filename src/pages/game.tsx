import type { NextPage } from "next";
import Head from "next/head";

import { WithHeader } from "~/components/WithHeader";
import { GameDetailsCard } from "~/components/GameDetailsCard";
import { PlayerCard } from "~/components/PlayerCard";

import { Title, TitleLevel } from "@liene-putnina/react-components-for-you";

import { useUser } from "@clerk/nextjs";
const Game: NextPage = () => {
  const user = useUser();
  // console.log(user.fullName);
  return (
    <>
      <Head>
        <title>Game </title>
      </Head>
      <WithHeader headerTitle="Game">
        <GameDetailsCard />
        <div className="mt-4 flex flex-col">
          <Title
            level={TitleLevel.TWO}
            className="mx-1.5"
            style={{ fontSize: "30px", lineHeight: "10px" }}
          >
            Players
          </Title>
          <div className="flex flex-row">
            <PlayerCard
              playerName="Liene"
              score={20}
              timeLeft={40}
              turnTime={2}
            />
            <PlayerCard playerName="AI" score={15} timeLeft={35} turnTime={2} />
          </div>
        </div>
      </WithHeader>
    </>
  );
};

export default Game;
