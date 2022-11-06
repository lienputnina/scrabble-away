import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Moves } from '@kputnins/scrabble-ai-core';
import { createNewGame } from '@kputnins/scrabble-ai-game';
import { alphabetLvLv } from '@kputnins/scrabble-ai-alphabet';
import { ExercisePayload } from '../api/exercise';
import { GetNextMovePayload } from '../api/game';

import styles from './ApiExercisePage.module.scss';

const fetchExerciseData = async (
  setApiPayload: Dispatch<SetStateAction<ExercisePayload | null>>,
) => {
  try {
    const response = await fetch('api/exercise');
    const parsedResponse = (await response.json()) as ExercisePayload;
    setApiPayload(parsedResponse);
  } catch (error) {
    setApiPayload(null);
  }
};

const fetchNextMoves = async (
  setNextMoves: Dispatch<SetStateAction<Moves | null>>,
) => {
  const game = createNewGame({
    alphabet: alphabetLvLv,
    playerParams: [{ name: 'player 1' }, { name: 'player 2' }],
  });

  try {
    const response = await fetch('api/game', {
      method: 'POST',
      body: JSON.stringify(game),
    });
    const parsedResponse = (await response.json()) as GetNextMovePayload;

    setNextMoves(parsedResponse.nextMoves);
  } catch (error) {
    setNextMoves(null);
  }
};

export interface ApiExercisePageProps {}

const ApiExercisePage: FC<ApiExercisePageProps> = (props) => {
  const [apiPayload, setApiPayload] = useState<null | ExercisePayload>(null);
  const [nextMoves, setNextMoves] = useState<null | Moves>(null);

  return (
    <main className={styles.MainPage}>
      <h1>API exercise page</h1>
      <h2>This is where the fetched data will be displayed 👇👇👇</h2>
      <div>
        <textarea value={apiPayload?.status} />
      </div>
      <button onClick={() => fetchExerciseData(setApiPayload)}>
        Fetch data
      </button>
      <h2>Get next moves</h2>
      <ul>
        {nextMoves?.map((move) => (
          <li key={move.letter.id}>{move.letter.symbol}</li>
        ))}
      </ul>
      <button onClick={() => fetchNextMoves(setNextMoves)}>
        Get next moves
      </button>
    </main>
  );
};

export default ApiExercisePage;
