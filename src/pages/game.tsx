import type { NextPage } from "next";
import Head from "next/head";

import { WithHeader } from "~/components/hoc/WithHeader";
import { GameInfoSection } from "~/components/GameInfoSection";

const Game: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Game </title>
      </Head>
      <WithHeader headerTitle="Game">
        <div className="m-4 flex w-full flex-row justify-between">
          <p>Some other stuff</p>
          <GameInfoSection />
        </div>
      </WithHeader>
    </div>
  );
};

export default Game;
