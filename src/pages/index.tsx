import type { NextPage } from 'next';
import Link from 'next/link';

import {
  Button,
  Title,
  Text,
  TextAlignment,
  TitleLevel,
  TitleAlignment,
} from '@liene-putnina/react-components-for-you';
import { WithHeader } from '~/components/WithHeader';

import '@liene-putnina/react-components-for-you/dist/index.css';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ScrabbleAway</title>
      </Head>
      <WithHeader headerTitle="Scrabble Away">
        <main>
          <div className="flex flex-col pb-3">
            <Title
              level={TitleLevel.TWO}
              alignment={TitleAlignment.CENTER}
              style={{ fontSize: '40px', lineHeight: '40px' }}
            >
              Welcome to Scrabble Away!
            </Title>
            <Text className="text-lg">
              This an online version of Latvian Scrabble. Words are formed,
              using the Latvian alphabet. Since there are more vowels than
              consonants in this alphabet, these types of letters will occur
              more often then they do in the English version and the points
              awarded for the usage of each letter will differ as well. The
              validity of each word is checked with the help of Latvian online
              dictionary{' '}
              <a
                href="https://tezaurs.lv/"
                className="text-rose-950 hover:text-rose-900"
              >
                Tēzaurs.
              </a>
            </Text>
          </div>
          <div className="flex flex-col pb-3">
            <Title
              level={TitleLevel.THREE}
              alignment={TitleAlignment.CENTER}
              style={{ fontSize: '38px', lineHeight: '38px' }}
            >
              Getting started
            </Title>
            <Text alignment={TextAlignment.CENTER}>
              To start a new game press the &quot;New Game&quot; button below
            </Text>
            <Link href="/gameDetailsPage" className="self-center">
              <Button onClick={() => console.log('Start new game')}>
                New Game
              </Button>
            </Link>
          </div>
        </main>
      </WithHeader>
    </>
  );
};

export default Home;
