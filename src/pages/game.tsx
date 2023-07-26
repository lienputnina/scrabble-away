import type { NextPage } from "next";
import Head from "next/head";

import { WithHeader } from "~/components/WithHeader";
import { GameDetailsCard } from "~/components/GameDetailsCard";

const Game: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game </title>
      </Head>
      <WithHeader headerTitle="Game">
        <GameDetailsCard />
      </WithHeader>
    </>
  );
};

export default Game;
