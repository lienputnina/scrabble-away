import { type NextPage } from 'next';
import Head from 'next/head';

import { WithHeader } from '~/components/WithHeader';
import {
  Title,
  TitleAlignment,
  TitleLevel,
} from '@liene-putnina/react-components-for-you';
import { GameDetailsForm } from '~/components/GameDetailsForm';

const GameDetailsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Game details</title>
      </Head>
      <WithHeader headerTitle="Game details form">
        <main>
          <Title
            level={TitleLevel.TWO}
            alignment={TitleAlignment.CENTER}
            style={{ fontSize: '36px', lineHeight: '36px' }}
          >
            Fill out the game details
          </Title>
          <GameDetailsForm />
        </main>
      </WithHeader>
    </>
  );
};

export default GameDetailsPage;
